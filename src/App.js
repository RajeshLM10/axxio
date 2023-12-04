import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import PostRequest from "./component/PostRequest";
import DeleteRequest from "./component/DeleteRequest";
import GetRequest from "./component/GetRequest";
import Home from "./component/Home"; // Import the Home component

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/get">GET Request</Link>
            </li>
            <li>
              <Link to="/post">POST Request</Link>
            </li>
            <li>
              <Link to="/delete">DELETE Request</Link>
            </li>
            <li>
              <Link to="/home">Home</Link> {/* Add a link to the Home component */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/get" element={<GetRequest />} />
          <Route path="/post" element={<PostRequest />} />
          <Route path="/delete" element={<DeleteRequest />} />
          <Route path="/home" element={<Home />} /> {/* Add a route for the Home component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
