import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserInfo } from "../api";

const UserInfo = ({ token }) => {
  const [userData, setUserData] = useState({});
  useEffect( async () => {
    await getUserInfo(token)
      .then((results) => {
        setUserData(results.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(userData);
  return (
    <div id="user-display">
      <h1 className="user-username">{userData.username}</h1>
      <h3>{userData.username}'s Posts</h3>
      <Link to="/">Return to home</Link>
      {/* {userData.posts.map((post) => {
        return (
          <div >
            <span>{post.title}</span>
            <span>{post.description}</span>
            <span>Price - {post.price}</span>
          </div>
        );
      })} */}
      {/* Mapping function will not work here. Structured similarly to the posts but breaks the UserInfo page when implemented. */}
    </div>
  );
};

export default UserInfo;
