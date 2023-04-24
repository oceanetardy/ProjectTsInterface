import Title from "../components/Title";
import logo from "../assets/logo.svg";
import Footer from "../components/Footer";
import React, {FC, useState} from "react";
import '../assets/css/App.css';
import FormTask from "../components/FormTask";
import {addTask} from "../services/task.service";
import Task from "../types/Task";
import {Link, useParams} from "react-router-dom";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import FormUser from "../components/FormUser";
import Button from "react-bootstrap/Button";
import {IoEyeSharp} from "react-icons/io5";


const FormTaskPage:FC = () =>{
    const {userId} = useParams();
    const [tasks, setTask] = useState<Task[] | null>([]);
    const [isOpenForm, setOpenForm] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const sendNewTask = (formData: any) => {
        setOpenForm(false);
        const add = async (taskAdd : Task)=>{
            const task = await addTask(taskAdd);
            setRefresh(refresh+1);
        }

        add(formData);

    }
    return (
        <header className="App-header">




            <Container>
                <Col md={12}>
                    <Row>
                        <Title title={"Ajouter une tâche pour l'utilisateur  " + userId} />
                    </Row>
                </Col>


                <Row>
                    <div> <FormTask onSubmit={sendNewTask} userId = {userId}/></div>
                </Row>

                <Row>

                    <Link to ={'/users/' + userId + '/tasks'}>
                        <Button variant="primary" className='iconButton'><IoEyeSharp /> Retour aux tâches de l'utilisateur</Button>
                    </Link>
                </Row>
            </Container>
            <Footer/>

        </header>

    )}
export default FormTaskPage;