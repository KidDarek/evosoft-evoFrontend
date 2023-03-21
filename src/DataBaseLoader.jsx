import React, { createContext, useState, useEffect } from "react";
import {
  products as productsData,
  users as usersData,
  userQuestions as userQuestionsData,
} from "./db";

export const DataContext = createContext({});

const DataProvider = (props) => {
  const [products, setProducts] = useState(productsData);
  const [users, setUsers] = useState(usersData);
  const [userQuestions, setUserQuestions] = useState(userQuestionsData);

  useEffect(() => {
    if (process.env.BACKEND_MODE !== true) {
      setProducts(productsData);
      setUsers(usersData);
      setUserQuestions(userQuestionsData);
    } else {
      Promise.all([
        fetch("http://localhost:5001/getProducts").then((response) =>
          response.json()
        ),
        fetch("http://localhost:5001/getUsers").then((response) =>
          response.json()
        ),
        fetch("http://localhost:5001/getUserQuestions").then((response) =>
          response.json()
        ),
      ]).then(([products, users, userQuestions]) => {
        setProducts(products);
        setUsers(users);
        setUserQuestions(userQuestions);
      });
    }
  }, []);

  return (
    <DataContext.Provider value={{ products, users, userQuestions }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
export {
  productsData as products,
  usersData as users,
  userQuestionsData as userQuestions,
};
