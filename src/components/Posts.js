import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api";
import NewPost from "./NewPost";

const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts(token)
      .then((value) => {
        setPosts(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [posts]);
  return (
    <div className="post-display">
      <NewPost token={token} />
      {posts.map((post) => {
        return (
          <div className="post-content">
            <span className="post-username">{post.author.username}</span>
            <span className="post-title">{post.title}</span>
            <span className="post-content">{post.description}</span>
            <span className="post-price">Price - {post.price}</span>
            {/* <Link state={{post: post.id,}} to="/messages">Messages</Link> */}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
