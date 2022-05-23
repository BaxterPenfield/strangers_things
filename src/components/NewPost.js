import React, {useState} from "react";
import { createPost } from "../api";

function NewPost({token}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(true);
  return (
    <div id="new-post">
      <h1>Create New Post</h1>
      <form id="new-post-form" onSubmit={async () => {
          try {
              createPost(token, title, description, price, willDeliver);
          } catch (error) {
              console.error(error);
          }
      }}>
        <fieldset>
          <input
            id="new-post-title"
            placeholder="Post Title"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            id="new-post-description"
            placeholder="Post Description"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <input
            id="new-post-price"
            placeholder="Item Price"
            type="text"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="select-will-deliver">Will You Deliver?</label>
          <select
            id="select-will-deliver"
            onChange={(e) => {
              if (e.target.value === "Yes") {
                setWillDeliver(true);
              }
              if (e.target.value === "No") {
                setWillDeliver(false);
              }
            }}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </fieldset>
        <button type="submit">Create Post!</button>
      </form>
    </div>
  );
}

export default NewPost;
