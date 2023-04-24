import Title from "../components/Title";
import Footer from "../components/Footer";
import React, {FC, useState} from "react";
import '../assets/css/App.css';
import ListTasksByUser from "../components/ListTaskByUser";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {IoAddCircle, IoEyeSharp} from "react-icons/io5";


const TaskByUserIdPage:FC = () => {
    const {id} = useParams();


    return (
        <header className="App-header">
            <Title title="Liste des tâches pour le user"  />



            <div> <ListTasksByUser id = {id}/></div>

            <Link to ={'/addtask/' + id }>
                <Button variant="danger" className='iconButton'><IoAddCircle /> Ajouter une tâche</Button>
            </Link>

            <Footer/>

        </header>

    )}
export default TaskByUserIdPage;