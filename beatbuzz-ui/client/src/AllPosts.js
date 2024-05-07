import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllPosts.css';
import StarRating from './StarRatingDisplay';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Profile from './Profile';
const AllPostsPage = () => {
  const [state, setState] = useState([]);
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const navigate = useNavigate();
  // const [User, setUser] = useState([]);
  

  useEffect(() => {
    // Fetch all posts from the backend when the component mounts
    // axios.get('http://localhost:8080/api/auth/user')
    axios.get('http://localhost:8080/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // Update the like count
  const handleLike = async (postId) => {
    try {
      await axios.post(`http://localhost:8080/api/posts/${postId}/like`);
      setPosts(posts.map(post => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      }));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      // If user confirms, delete the post
      axios.delete(`http://localhost:8080/api/posts/post/${postId}`)
        .then(() => {
          // Remove the deleted post from the state
          setPosts(posts.filter(post => post.id !== postId));
        })
        .catch(error => {
          console.error('Error deleting post:', error);
        });
    }
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

 
  const handleView = (postUsername) => {
    
    // axios.get('http://localhost:8080/api/posts/user/' + postId )
    navigate("/Profile")
    localStorage.setItem("postUser", postUsername);
    // if(handleView.onClick == true) {
    //   redirect="Profile";
  }
  
  

  return (
    <div className={`all-posts-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2 className="all-posts">All Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="post-header">
            <p className="album-name">{post.albumName}</p>
            <div className="options">
              {/* <Link to={`/profile/${user.id}`} ></Link> */}
              <Link to={`/edit-post/${post.id}`} className="edit-button">Edit</Link>
              <button onClick={() => handleDelete(post.id)} className="delete-button">Delete</button>
              <button onClick={() => handleLike(post.id)} className="like-button">❤️ {post.likes}</button> {/* Add Like button */}
              <button onClick={() => handleView(post.username)}>View profile</button>
            </div>
          </div>
          <p className="post-details"><StarRating rating={post.starRating} /></p>
          <p className="post-content">{post.content}</p>
          
          <p className="post-createdAt">Created on: {new Date(post.createdAt).toLocaleString()}</p> {/* Display creation date */}
        </div>
      ))}
    </div>
  );
};

export default AllPostsPage;

