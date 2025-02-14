
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/react-style.css';
import {Routes, Route} from "react-router-dom";
//import MainPage from "./components/MainPage";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact"

function App() {


  return (

    <div>
      
      
        <Routes>
          {/*Parent root*/}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="privacy" element={<Privacy />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      
    </div>
    
  );
}

export default App;
