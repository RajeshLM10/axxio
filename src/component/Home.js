import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const addUser = () => {
    if (newUser.name.trim() === "" || newUser.email.trim() === "") {
      // Prevent adding a user with empty name or email
      return;
    }
  
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((response) => {
        setUsers([...users, response.data]);
        setNewUser({ name: "", email: "" });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const deleteUser = (userId) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
      {users.map((user) => (
        <li key={user.id}>
          <div className="user-item">
            <span>{user.name} - {user.email}</span>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
      <h2>Add User</h2>
      <input
  className="input-field" // Apply the CSS class
  type="text"
  placeholder="Name"
  value={newUser.name}
  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
/>
<input
  className="input-field" // Apply the CSS class
  type="email"
  placeholder="Email"
  value={newUser.email}
  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
/>
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default Home;
