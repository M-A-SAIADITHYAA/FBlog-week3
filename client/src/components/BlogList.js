import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogList.css';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Popular trainers data
  const popularTrainers = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Strength Training",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Yoga & Flexibility",
      rating: 4
    },
    {
      id: 3,
      name: "Michael Brown",
      specialty: "HIIT & Cardio",
      rating: 5
    },
    {
      id: 4,
      name: "Emily Davis",
      specialty: "Nutrition & Wellness",
      rating: 4
    }
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  // Function to open Google Form
  const openGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeOGK7MV0OOALwQqo_QWKhGJJDgGBsgn4ch7Sn4X22Me_4xbg/viewform?usp=header', '_blank');
  };

  return (
    <div className="blog-list">
      <h1>FBlog Posts</h1>
      <div className="blogs">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <h2>{blog.title}</h2>
            <p className="blog-content">{blog.content}</p>
            <div className="blog-meta">
              <span>By {blog.author}</span>
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="popular-section">
        <h2>Most Popular Trainers</h2>
        <div className="trainers-grid">
          {popularTrainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <h3>{trainer.name}</h3>
              <div className="stars">{renderStars(trainer.rating)}</div>
              <p>{trainer.specialty}</p>
            </div>
          ))}
        </div>
        <div className="join-section">
          <button className="join-button" onClick={openGoogleForm}>
            Join as Trainee
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogList; 