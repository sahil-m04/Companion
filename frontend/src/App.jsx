import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import BookRecommender from './Bookrecommender/Bookrecommender';
import Resources from './Resources/Resources';
import Chat from './Chat/Chat';
import Blogs from './Blog/Blogs/Blogs';
import DisplayBlog from "./Blog/DisplayBlog/DisplayBlog";
import AddBlog from "./Blog/AddBlog/AddBlog";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bookrecommender" element={<BookRecommender />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Blog/Blogs" element={<Blogs />} />
        <Route path="/Blog/AddBlog" element={<AddBlog />} />
        <Route path="/Blog/DisplayBlog" element={<DisplayBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
