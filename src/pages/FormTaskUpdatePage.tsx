import Title from "../components/Title";
import Footer from "../components/Footer";
import React, {FC, useState, useEffect} from "react";
import '../assets/css/App.css';
import FormTask from "../components/FormTask";
import {addTask, getTaskId, updateTask} from "../services/task.service";
import Task from "../types/Task";
import {useParams} from "react-router-dom";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import FormUser from "../components/FormUser";


const FormTaskUpdatePage:FC = () =>{

    const {id} = useParams()
    const [task, setTask] = useState<Task | null>(null);
    const [isOpenForm, setOpenForm] = useState(false);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        async function getData() {
            const task: Task = await getTaskId(id);
            setTask(task);
        }
        getData();

    }, [refresh]);

    const sendUpdateTask = (formData: any) => {
        setOpenForm(false);
        const update = async (taskUpdate : Task)=>{
            await updateTask(taskUpdate);
            setRefresh(refresh+1);
        }

        update(formData);

    }
    return (
        <header className="App-header">





            <Container>
                <Col md={12}>
                    <Row>
                        <Title title="Modifier la tâche"  />
                    </Row>
                </Col>


                <Row>
                    <div> <FormTask onSubmit={sendUpdateTask} task={task}/></div>
                </Row>


            </Container>


            <Footer/>

        </header>

    )}
export default FormTaskUpdatePage;