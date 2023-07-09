import { createContext, useState, useEffect } from "react";
import UserAPI from "../api/UserAPI";

const UserContext = createContext([]);

function UserContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Load the logged-in user from localStorage when the component mounts
    const savedLoggedInUser = localStorage.getItem("loggedInUser");
    if (savedLoggedInUser) {
      setLoggedInUser(JSON.parse(savedLoggedInUser));
    }
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

  // Works with regular logins, since backend expects a password in userData
  async function loginUser(userData) {
    const user = await UserAPI.login(userData);
    if (user.id) {
      setLoggedInUser(user);
      // Save the logged-in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
    return user;
  }

  // Mandatory function to validate the user that is given back from query through GitHub login.
  // This way when setLoggedInUser() is called from outside components, it will still validate it and avoid logging in with fake a user.
  function validateLoggedInUser(user) {
    if (user.id) {
      getUserById(user.id).then((validatedUser) => {
        if (validatedUser.id) {
          setLoggedInUser(validatedUser); // Set the logged-in user
          // Save the logged-in user in localStorage
          localStorage.setItem("loggedInUser", JSON.stringify(validatedUser));
        }
      });
    }
  }

  function logoutUser() {
    // Clear the logged-in user state
    setLoggedInUser(null);

    // Remove the logged-in user from localStorage
    localStorage.removeItem("loggedInUser");
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

  function getLoggedInUser() {
    return loggedInUser;
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        removeUser,
        updateUser,
        getUserById,
        loginUser,
        getLoggedInUser,
        logoutUser,
        setLoggedInUser: validateLoggedInUser, // Update setLoggedInUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
