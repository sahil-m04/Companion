import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import BookRecommender from './Bookrecommender/Bookrecommender';
import Chat from './Chat/Chat';
import Blogs from './Blogs/Blogs';
import './App.css';
import LoginPage from './Login/LoginPage';
import Signup from './Signup/SignUp';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bookrecommender" element={<BookRecommender />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
