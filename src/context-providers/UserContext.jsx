import { useState, useEffect } from "react";
import { UserAPI } from "../api-implementations/UserAPI";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await UserAPI.getAll();
      setUsers(users);
    };
    fetchData();
  }, []);

  const addUser = async (user) => {
    await UserAPI.create(user);
    const updatedUsers = await UserAPI.getAll();
    setUsers(updatedUsers);
  };

  const removeUser = async (id) => {
    await UserAPI.remove(id);
    const updatedUsers = await UserAPI.getAll();
    setUsers(updatedUsers);
  };

  const updateUser = async (user) => {
    await UserAPI.update(user);
    const updatedUsers = await UserAPI.getAll();
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, removeUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

/* usage:
import { createContext } from 'react';

const UserContext = createContext();
*/
