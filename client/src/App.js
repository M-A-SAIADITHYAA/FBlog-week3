import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import CreateBlog from './components/CreateBlog';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App; 