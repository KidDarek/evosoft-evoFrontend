import React, { createContext, useState, useEffect } from "react";
import UserQuestionAPI from "../api/UserQuestionAPI";

export const UserQuestionContext = createContext();

export const UserQuestionContextProvider = ({ children }) => {
  const [userQuestions, setUserQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await UserQuestionAPI.getAll();
      setUserQuestions(data);
    };
    fetchData();
  }, []);

  const getUserQuestionById = async (id) => {
    return await UserQuestionAPI.getById(id);
  };

  const addUserQuestion = async (userQuestion) => {
    await UserQuestionAPI.add(userQuestion);
    setUserQuestions([...userQuestions, userQuestion]);
  };

  const removeUserQuestion = async (id) => {
    await UserQuestionAPI.remove(id);
    setUserQuestions(userQuestions.filter((uq) => uq.id !== id));
  };

  const updateUserQuestion = async (userQuestion) => {
    await UserQuestionAPI.update(userQuestion);
    setUserQuestions(
      userQuestions.map((uq) => (uq.id === userQuestion.id ? userQuestion : uq))
    );
  };

  return (
    <UserQuestionContext.Provider
      value={{
        userQuestions,
        getUserQuestionById,
        addUserQuestion,
        removeUserQuestion,
        updateUserQuestion,
      }}
    >
      {children}
    </UserQuestionContext.Provider>
  );
};
