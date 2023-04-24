import Title from "../components/Title";
import Footer from "../components/Footer";
import React, {FC, useState} from "react";
import '../assets/css/App.css';
import ListTasksByUser from "../components/ListTaskByUser";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {IoAddCircle, IoEyeSharp} from "react-icons/io5";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ListUsers from "../components/ListUsers";


const TaskByUserIdPage:FC = () => {
    const {id} = useParams();


    return (
        <header className="App-header">
            <Container>
                <Col md={12}>
                    <Row>
                        <Title title={"Liste des tâches pour l'utilisateur " + id}/>
                    </Row>
                </Col>


                <Row>

                    <div> <ListTasksByUser id = {id}/></div>
                </Row>

                <Row>
                    <Link to ={'/addtask/' + id }>
                        <Button variant="danger" className='iconButton'><IoAddCircle /> Ajouter une tâche</Button>
                    </Link>
                </Row>

                <Row>

                    <Link to ={'/users/'}>
                        <Button variant="primary" className='iconButton'><IoEyeSharp /> Retour aux utilisateurs</Button>
                    </Link>
                </Row>

            </Container>


            <Footer/>
        </header>

    )}
export default TaskByUserIdPage;