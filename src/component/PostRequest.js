import React, { useState } from "react";
import axios from "axios";

function PostRequest() {
  const [title, setTitle] = useState("");
  const [it, setIt] = useState("");
  const [body, setBody] = useState("");
  const [postData, setPostData] = useState(null);

  const handlePost = () => {
    const postPayload = {
      it,
      title,
      body,
      userId: 2, // Replace with the actual user ID
    };

    axios.post("https://jsonplaceholder.typicode.com/posts", postPayload)
      .then(response => {
        setPostData(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>POST Request Component</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="it-number"
        value={it}
        onChange={e => setIt(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <button onClick={handlePost}>Post Data</button>
      {postData && (
        <div>
          <h3>Response:</h3>
          <p>IT no.{postData.it}</p>
          <p>ID: {postData.id}</p>
          <p>Title: {postData.title}</p>
          <p>Body: {postData.body}</p>
        </div>
      )}
    </div>
  );
}

export default PostRequest;
