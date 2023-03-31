import React, {FC} from "react";
import '../assets/css/App.css';
import Footer from "../components/Footer";
import ListUsers from "../components/ListUsers";
import Title from "../components/Title";
import logo from "../assets/logo.svg";

const User:FC = ()=>{
    return(

        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



                <div> <ListUsers /></div>

            <button ><a href={'/home'}>Retour </a></button>



            <img src={logo} className="App-logo" alt="logo" />

            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <Footer/>

        </header>





    )
}

export default User;