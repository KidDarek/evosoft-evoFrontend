import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/UsersAPI";
import Banner from "./banner/Banner";
import BestDealsPage from "./best-deals/BestDeals";

const MainPage = (props) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getUsers(setUsers, setError);
  }, []);

  console.log(users);

  return (
    <>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
      <Banner />
      <BestDealsPage />
    </>
  );
};

export default MainPage;
