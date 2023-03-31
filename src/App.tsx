import React, {FC, useEffect, useState} from 'react';
import Title from "./components/Title";
import logo from './assets/logo.svg';
import './assets/css/App.css';
import ListUsers from "./components/ListUsers";
import ListTasks from "./components/ListTasks";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";


import Footer from "./components/Footer";

const App : FC = () => {

  return (


    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<ListUsers />} />
                <Route path='/tasks' element={<ListTasks />} />
            </Routes>
        </Router>


    </div>
  );
}
export default App;
