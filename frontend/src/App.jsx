import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import BookRecommender from './Bookrecommender/Bookrecommender';
import Resources from './Resources/Resources';
import Blogs from './Blog/Blogs/Blogs';
import DisplayBlog from "./Blog/DisplayBlog/DisplayBlog";
import AddBlog from "./Blog/AddBlog/AddBlog";
import './App.css';
import ChatHome from "./Chat/pages/home/ChatHome";
import Login from "./Chat/pages/login/Login";
import SignUp from "./Chat/pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Chat/context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bookrecommender" element={<BookRecommender />} />
        <Route path="/Resources" element={<Resources />} />
				<Route path='/Chat/pages/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/Chat/pages/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
        <Route path='/' element={authUser ? <ChatHome /> : <Navigate to="/login" />} />
        <Route path="/Blog/Blogs" element={<Blogs />} />
        <Route path="/Blog/AddBlog" element={<AddBlog />} />
        <Route path="/Blog/DisplayBlog" element={<DisplayBlog />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
