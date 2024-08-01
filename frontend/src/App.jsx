import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import BookRecommender from './Bookrecommender/Bookrecommender';
import Resources from './Resources/Resources';
import Chat from './Chat/Chat';
import Blogs from './Blogs/Blogs';
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
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
