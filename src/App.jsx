import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Products';
import Signup from './signup/signup';
import Login from './signup/login';
import NotFound from './NotFound';
import Headroom from "react-headroom";

function App() {
 

  return (
    <>
    <BrowserRouter>
          <Headroom>
            <Navbar/>
          </Headroom> 
          
     <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/About" element={<About/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Products" element={<Product/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>    
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
