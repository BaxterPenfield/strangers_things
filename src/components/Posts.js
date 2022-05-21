import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";

const Posts = ({token}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(token).then((value) => {
        setPosts(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
//   async function loadPosts() {
//     try {
//       await fetchPosts().then((results) => {
//         setPosts(results);
//       });
//     } catch (error) {
//       console.error(error);
//     } 
//   }
  return (
      <div className="post-display">
          {posts.map((post) => {
              return (
                  <div className="post-content">
                      <span className="post-username">{post.author.username}</span>
                      <span className="post-title">{post.title}</span>
                      <span className="post-content">{post.description}</span>
                      <span className="post-price">Price - {post.price}</span>
                  </div>
              )
          })}
      </div>
  )
//   return <div id="posts">{posts.map((post) => {})}</div>;
};

export default Posts;
