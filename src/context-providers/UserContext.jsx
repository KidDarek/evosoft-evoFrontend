import { createContext, useEffect, useState } from "react";
import UserAPI from "../api/UserAPI";

const UserContext = createContext([]);

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      const data = await UserAPI.getAll();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  async function getUserById(id) {
    const user = await UserAPI.getById(id);
    return await user.json();
  }

  async function addUser(user) {
    await UserAPI.add(user);
    setUsers([...users, user]);
  }


  async function loginUser(userData) {
    const user = await UserAPI.login(userData);
    if (user.id === undefined) {
      return false;
    }
    setLoggedInUser(user);
    return true;
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
