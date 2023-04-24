import React, {FC} from "react";
import '../assets/css/App.css';
import Footer from "../components/Footer";
import ListUsers from "../components/ListUsers";
import Title from "../components/Title";
import Button from "react-bootstrap/Button";
import {IoAddCircle, IoEyeSharp} from "react-icons/io5";
import {Link} from "react-router-dom";


const User:FC = ()=>{
    return(

        <header className="App-header">
            <Title title="Liste des utilisateurs" />



                <div> <ListUsers /></div>



            <Link to ={'/adduser/'}>
                <Button variant="danger" className='iconButton'><IoAddCircle /> Ajouter un utilisateur</Button>
            </Link>

            <Footer/>

        </header>





    )
}

export default User;