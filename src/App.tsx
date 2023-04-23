import React, {FC} from 'react';
import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Tasks from "./pages/Tasks";
import Navbar from "./components/navbar";
import FormTaskPage from "./pages/FormTaskPage";
import FormUserPage from "./pages/FormUserPage";
import TaskByUserIdPage from "./pages/TaskByUserIdPage";
import FormTaskUpdatePage from "./pages/FormTaskUpdatePage";



const App : FC = () => {

  return (


    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<User />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/addtask/:userId' element={<FormTaskPage />} />
                <Route path='/adduser' element={<FormUserPage />} />
                <Route path='/users/:id/tasks' element={<TaskByUserIdPage />} />
                <Route path='/tasks/:id' element={<FormTaskUpdatePage />} />





            </Routes>
        </Router>


    </div>
  );
}
export default App;
