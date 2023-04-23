import Title from "../components/Title";
import logo from "../assets/logo.svg";
import Footer from "../components/Footer";
import React, {FC, useState} from "react";
import '../assets/css/App.css';
import FormTask from "../components/FormTask";
import {addTask} from "../services/task.service";
import Task from "../types/Task";
import {useParams} from "react-router-dom";


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
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



            <div> <FormTask onSubmit={sendNewTask} userId = {userId}/></div>


            <Footer/>

        </header>

    )}
export default FormTaskPage;