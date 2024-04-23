
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

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./Login";
// import CreatePostForm from "./CreatePostForm";

// const code = new URLSearchParams(window.location.search).get("code");

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/post/create" element={<CreatePostForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import axios from 'axios';
// import StarRating from './StarRating'; // Import the StarRating component
// import './CreatePostForm.css'; // Import CSS file for styling

// const CreatePostForm = () => {
//   const [formData, setFormData] = useState({
//     content: '',
//     starRating: 1, // Default value
//     albumName: '',
//     userId: userId
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleRatingChange = (rating) => {
//     setFormData({ ...formData, starRating: rating });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8080/api/post/', formData); // Send formData to backend
//       alert('Post created successfully');
//       setFormData({
//         content: '',
//         starRating: 1,
//         albumName: '',
//         userId: userId
//       });
//     } catch (error) {
//       alert('Error creating post');
//       console.error(error);
//     }
//   };

//   return (
//     <form className="create-post-form" onSubmit={handleSubmit}>
//       <input className="input-field" type="text" name="albumName" placeholder="Album Name" value={formData.albumName} onChange={handleChange} />
//       <StarRating onChange={handleRatingChange} />
//       <input className="input-field" type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
//       <input type="hidden" name="userId" value={formData.userId} />
//       <button className="submit-button" type="submit">Submit</button>
//     </form>
//   );
// };

// export default CreatePostForm;


//run CreatePostForm.js
import React from 'react';
import CreatePostForm from './CreatePostForm'; // Import the CreatePostForm component

function App() {
  // Assuming you have the userId available in your application state
  const userId = 1; // Replace '123' with the actual userId

  return (
    <div className="App">
      <CreatePostForm userId={userId} /> {/* Pass userId as a prop */}
    </div>
  );
}

export default App;