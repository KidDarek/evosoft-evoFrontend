import React, { createContext, useEffect, useState } from "react";
import UserQuestionAPI from "../api-implementations/UserQuestionAPI";

const UserQuestionContext = createContext([]);

const UserQuestionContextProvider = ({ children }) => {
  const [userQuestions, setUserQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const questions = await UserQuestionAPI.getAll();
      setUserQuestions(questions);
    };
    fetchData();
  }, []);

  const addQuestion = async (question) => {
    await UserQuestionAPI.add(question);
    setUserQuestions([...userQuestions, question]);
  };

  const removeQuestion = async (id) => {
    await UserQuestionAPI.remove(id);
    setUserQuestions(userQuestions.filter((question) => question.id !== id));
  };

  const updateQuestion = async (question) => {
    await UserQuestionAPI.update(question);
    setUserQuestions(
      userQuestions.map((q) => (q.id === question.id ? question : q))
    );
  };

  return (
    <UserQuestionContext.Provider
      value={{ userQuestions, addQuestion, removeQuestion, updateQuestion }}
    >
      {children}
    </UserQuestionContext.Provider>
  );
};

export { UserQuestionContext, UserQuestionContextProvider };
