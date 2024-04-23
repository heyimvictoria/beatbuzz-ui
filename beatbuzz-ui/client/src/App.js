
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
//   CardBody,
// } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import Dashboard from "./Dashbord";
// import Login from "./Login";

// const CLIENT_ID = "a749ae54533d4373a5cd180d822cf1e6";
// const CLIENT_SECRET = "22346e79e4514180b51fcc6abb6adcce";

// const code = new URLSearchParams(window.location.search).get("code");

// function App() {
//   return code ? <Dashboard code={code} /> : <Login />;
// }
// export default App;

import React, { useState } from 'react';
import CreatePostForm from './CreatePostForm';
import Dashboard from './Dashbord';
import './App.css';
import logo from './logo.jpeg';
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [redirectToHome, setRedirectToHome] = useState(false); // State to control redirection
  const handleCreatePost = () => {
    setRedirectToHome(true); // Set redirectToHome to true to trigger redirection
  };
  const renderPage = () => {
    switch (currentPage) {
      case 'create-review':
        return <CreatePostForm />;
      case 'search':
        return <Dashboard />;
      default:
        return (
          <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">Beat Buzz</h1>
            <div className="button-container">
              <button onClick={() => setCurrentPage('create-review')}>Create Review</button>
              <button onClick={() => setCurrentPage('search')}>Search</button>
            </div>
          </div>
        );
    }
  };
  return (
    <div>
      {renderPage()}
    </div>
  );
};
// >>>>>>> ffceea697825fd60583fc878e6c48c6ad1012130
//   return code ? <Dashboard code={code} /> : <Login />;
// };
export default App;