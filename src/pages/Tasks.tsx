import React, {FC} from "react";
import '../assets/css/App.css';
import Footer from "../components/Footer";
import ListTasks from "../components/ListTasks";
import Title from "../components/Title";
import logo from "../assets/logo.svg";

const Tasks:FC = ()=>{
    return(

        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



                <div> <ListTasks /></div>




            <Footer/>

        </header>



    )
}

export default Tasks;