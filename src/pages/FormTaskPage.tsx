import Title from "../components/Title";
import logo from "../assets/logo.svg";
import Footer from "../components/Footer";
import React, {FC} from "react";
import '../assets/css/App.css';
import FormTask from "../components/FormTask";


const FormTaskPage:FC = () =>{
    return (
        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



            <div> <FormTask /></div>


            <Footer/>

        </header>

    )}
export default FormTaskPage;