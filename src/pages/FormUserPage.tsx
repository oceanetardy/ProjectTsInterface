import Title from "../components/Title";
import Footer from "../components/Footer";
import React, {FC} from "react";
import '../assets/css/App.css';
import FormUser from "../components/FormUser";


const FormUserPage:FC = () =>{
    return (
        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



            <div> <FormUser /></div>


            <Footer/>

        </header>

    )}
export default FormUserPage;