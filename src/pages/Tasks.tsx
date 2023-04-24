import React, {FC} from "react";
import '../assets/css/App.css';
import Footer from "../components/Footer";
import ListTasks from "../components/ListTasks";
import Title from "../components/Title";
import logo from "../assets/logo.svg";
import Row from 'react-bootstrap/Row';
import {Col, Container} from "react-bootstrap";

const Tasks:FC = ()=>{
    return(

        <header className="App-header">
            <Container>
            <Col md={12}>
                <Row>
                    <Title title="Liste des tâches"/>
                </Row>
            </Col>


            <Row>
                <div> <ListTasks /></div>
            </Row>

                </Container>

            <Footer/>

        </header>



    )
}

export default Tasks;