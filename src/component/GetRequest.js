import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function GetRequest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(""); // State for id input
  const [name, setName] = useState(""); // State for name input
  const [filteredData, setFilteredData] = useState([]); // State for filtered data

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with all data
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Function to filter data based on id and name
  const filterData = () => {
    const filteredResult = data.filter((item) => {
      const idMatch = !id || item.id.toString() === id;
      const nameMatch = !name || item.name.toLowerCase().includes(name.toLowerCase());
      return idMatch && nameMatch;
    });
    setFilteredData(filteredResult);
  };

  return (
    <div>
      <h2>GET Request</h2>
      <div>
        <input
          type="text"
          placeholder="Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={filterData}>Apply Filter</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {filteredData.length > 0 ? (
        <div>
          <h3>searched item</h3>
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No matching data.</p>
      )}
    </div>
  );
}

export default GetRequest;
