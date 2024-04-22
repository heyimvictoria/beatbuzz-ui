import React, { useState } from 'react';
import axios from 'axios';
import StarRating from './StarRating'; // Import the StarRating component
import './CreatePostForm.css'; // Import CSS file for styling

const CreatePostForm = ({ userId }) => { // Receive userId as a prop
  const [formData, setFormData] = useState({
    content: '',
    starRating: 1, // Default value
    albumName: '',
    userId: userId // Assign userId from props
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, starRating: rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/posts/', formData); // Send formData to backend
      alert('Post created successfully');
      setFormData({
        content: '',
        starRating: 1,
        albumName: '',
        userId: userId
      });
    } catch (error) {
      alert('Error creating post');
      console.error(error);
    }
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="albumName" placeholder="Album Name" value={formData.albumName} onChange={handleChange} />
      <StarRating onChange={handleRatingChange} />
      <input className="input-field" type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
      <input type="hidden" name="userId" value={formData.userId} />
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
};

export default CreatePostForm;














// Test front end post creation
// import React, { useState } from 'react';
// import axios from 'axios';

// const CreatePostForm = () => {
//   const [formData, setFormData] = useState({
//     content: '',
//     starRating: 1,
//     albumName: '',
//     userId: 302 // Assuming userId is hardcoded for testing
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/posts', formData);
//       console.log('Post created successfully:', response.data);
//       setFormData({
//         content: '',
//         starRating: 1,
//         albumName: '',
//         userId: 652
//       });
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="albumName" placeholder="Album Name" value={formData.albumName} onChange={handleChange} />
//       <input type="text" name="content" placeholder="Review" value={formData.content} onChange={handleChange} />
//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

// export default CreatePostForm;
