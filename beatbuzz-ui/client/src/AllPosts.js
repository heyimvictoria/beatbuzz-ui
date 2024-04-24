// AllPostsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllPosts.css';
import StarRating from './StarRatingDisplay';

import { Link } from 'react-router-dom';

const AllPostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts from the backend when the component mounts
    axios.get('http://localhost:8080/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleEdit = (postId) => {
    // Logic to handle edit action
    console.log('Editing post with ID:', postId);
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      // Logic to delete post
      console.log('Deleting post with ID:', postId);
    }
  };

  return (
    <div className="all-posts-container">
      <h2 className="all-posts">All Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <div className="post-header">
            <p className="album-name">{post.albumName}</p>
            <div className="options">
              <Link to={`/edit-post/${post.id}`} className="edit-button" onClick={() => handleEdit(post.id)}>Edit</Link>
              <button className="delete-button" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </div>
          <p className="post-details"><StarRating rating={post.starRating} /></p>
          <p className="post-content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPostsPage;
