import React, {FC} from 'react';
import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Tasks from "./pages/Tasks";
import Navbar from "./components/navbar";
import FormTaskPage from "./pages/FormTaskPage";



const App : FC = () => {

  return (


    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element={<User />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/addtask' element={<FormTaskPage />} />

            </Routes>
        </Router>


    </div>
  );
}
export default App;
