import React, {FC} from "react";
import '../assets/css/App.css';
import Footer from "../components/Footer";
import ListUsers from "../components/ListUsers";
import Title from "../components/Title";
import Button from "react-bootstrap/Button";
import {IoAddCircle, IoEyeSharp} from "react-icons/io5";
import {Link} from "react-router-dom";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ListTasks from "../components/ListTasks";


const User:FC = ()=>{
    return(

        <header className="App-header">
            <Container>
                <Col md={12}>
                    <Row>
                        <Title title="Liste des utilisateurs"/>
                    </Row>
                </Col>


                <Row>
                    <Link to ={'/adduser/'}>
                        <Button variant="danger" className='iconButton'><IoAddCircle /> Ajouter un utilisateur</Button>
                    </Link>
                </Row>

                <Row>
                    <div> <ListUsers /></div>
                </Row>


            </Container>





            <Footer/>

        </header>





    )
}

export default User;