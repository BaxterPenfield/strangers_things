import React, { useEffect, useState } from "react";
import { getUserInfo } from "../api";

const UserInfo = ({ token, userDisplay }) => {
  const [userData, setUserData] = useState({});
  useEffect(async () => {
    await getUserInfo(token)
      .then((results) => {
        setUserData(results.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userDisplay]);
  
  return (
    <div id="user-display">
      <div className="user-username">{userData.username}</div>
    </div>
  )
};

export default UserInfo;
