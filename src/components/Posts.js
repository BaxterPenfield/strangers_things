import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts().then((value) => {
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
      <div className="posts">
          {posts.map((post) => {
              return (
                  <div className="post">
                    <div className="post-heading">
                      <span className="username">{post.author.username}</span>
                      <span className="title">{post.title}</span>
                    </div>
                      <span className="post-content">{post.description}</span>
                      <span className="price">Price - {post.price}</span>
                  </div>
              )
          })}
      </div>
  )
//   return <div id="posts">{posts.map((post) => {})}</div>;
};

export default Posts;
