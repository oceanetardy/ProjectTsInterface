import Title from "../components/Title";
import Footer from "../components/Footer";
import React, {FC, useState} from "react";
import '../assets/css/App.css';
import ListTasksByUser from "../components/ListTaskByUser";


const TaskByUserIdPage:FC = () =>{


    return (
        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



            <div> <ListTasksByUser/></div>


            <Footer/>

        </header>

    )}
export default TaskByUserIdPage;