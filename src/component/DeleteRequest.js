import React, { useState, useEffect } from "react";
import axios from 'axios';

function DeleteRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    // Replace with the actual ID or parameter you want to use for deletion
    const resourceIdToDelete = 5; // Example ID

    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${resourceIdToDelete}`; // Replace with the actual API endpoint URL

    axios.delete(apiUrl)
      .then(() => {
        setDeleted(true);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Delete Request Component</h2>
      {loading && <p>Deleting...</p>}
      {error && <p>Error: {error.message}</p>}
      {deleted && <p>Data deleted successfully.</p>}
    </div>
  );
}

export default DeleteRequest;
