import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Blog from './Blog.js';
import BlogPage from './Template.Blog.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/blog/:name" element={<BlogPage/>}></Route>
      <Route path="blog/" element={<Blog/>}></Route>
    </Routes>
  </BrowserRouter>
);