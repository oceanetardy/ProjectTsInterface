import Title from "../components/Title";
import Footer from "../components/Footer";
import React, {FC} from "react";
import '../assets/css/App.css';
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ListTasksByUser from "../components/ListTaskByUser";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {IoAddCircle, IoEyeSharp} from "react-icons/io5";


const Home:FC = () =>{
    return (
<header className="App-header">





    <Container>
        <Col md={12}>
            <Row>
                <Title title="PROJET NFP 119"  />
            </Row>
        </Col>


        <Row>

            <p> Application de gestion de tâche réalisée avec Node, React et Mongo DB.</p>

        </Row>

        <Row>
            <p> Il est possible d'ajouter un utilisateur ainsi que de lui attribuer des tâches</p>
        </Row>

        <Row>

            <p> Il est également possiblement de modifier la tâche.</p>
        </Row>

    </Container>
    <Footer/>


</header>
    )}
export default Home;