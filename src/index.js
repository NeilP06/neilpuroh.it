import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './pages/App.js';
import Blog from './pages/Blog.js';
import Experiences from './pages/Experiences.js';
import Projects from './pages/Projects.js';

import BlogPage from './templates/Template.Blog.js';
import TagPage from './templates/Template.Tag.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/blog/:name" element={<BlogPage/>}></Route>
      <Route path="blog" element={<Blog/>}></Route>
      <Route path="blog/tag/:tagname" element={<TagPage/>}></Route>
      <Route path="blog/tag" element={<Blog/>}></Route>
      <Route path="experience" element={<Experiences/>}></Route>
      <Route path="projects" element={<Projects/>}></Route>
    </Routes>
  </BrowserRouter>
);