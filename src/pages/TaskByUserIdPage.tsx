import Title from "../components/Title";
import Footer from "../components/Footer";
import React, {FC, useState} from "react";
import '../assets/css/App.css';
import ListTasksByUser from "../components/ListTaskByUser";
import { useParams } from "react-router-dom";


const TaskByUserIdPage:FC = () => {
    const {id} = useParams();


    return (
        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



            <div> <ListTasksByUser id = {id}/></div>

            <a
                className="App-link"
                href="http://localhost:3000/addtask"
            >
                Ajouter une tâche
            </a>

            <Footer/>

        </header>

    )}
export default TaskByUserIdPage;