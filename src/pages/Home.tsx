import Title from "../components/Title";
import logo from "../assets/logo.svg";
import Footer from "../components/Footer";
import React, {FC} from "react";
import '../assets/css/App.css';


const Home:FC = () =>{
    return (
<header className="App-header">
    <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>
    <button ><a href={'/users'}>Voir tous les utilisateurs </a></button>
    <button ><a href={'/tasks'}>Voir toutes les tâches </a></button>


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
    )}
export default Home;