import { createContext, useEffect, useState } from "react";
import UserAPI from "../api/UserAPI";

const UserContext = createContext([]);

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const data = await UserAPI.getAll();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  async function getUserById(id) {
    const user = await UserAPI.getById(id);
    return user;
  }

  async function addUser(user) {
    const result = await UserAPI.add(user);
    setUsers([...users, user]);
    return result;
  }

  async function loginUser(userData) {
    const user = await UserAPI.login(userData);
    setLoggedInUser(user);
    return user;
  }

  async function removeUser(id) {
    await UserAPI.remove(id);
    setUsers(users.filter((user) => user.id !== id));
  }

  async function updateUser(updatedUser) {
    await UserAPI.update(updatedUser);
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  }

  return (
    <UserContext.Provider
      value={{ loggedInUser, users, addUser, removeUser, updateUser, getUserById, loginUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
