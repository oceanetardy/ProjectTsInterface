import Title from "../components/Title";
import Footer from "../components/Footer";
import '../assets/css/App.css';
import FormUser from "../components/FormUser";
import React, {FC, useState, useEffect, Dispatch} from "react";
import {getUsers, addUser} from "../services/user.service";
import User from "../types/User";



const FormUserPage:FC = () =>{
    const [users, setUsers] = useState<User[] | null>([]);
    const onclick = () => { alert('click button') };
    const [isOpenForm, setOpenForm] = useState(false);
    const [refresh, setRefresh] = useState(0);
    const sendNewUser = (formData: any) => {
        setOpenForm(false);
        const add = async (userAdd : User)=>{
            const user = await addUser(userAdd);
            setRefresh(refresh+1);
        }

        add(formData);

    }
    return (
        <header className="App-header">
            <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>



            <div> <FormUser onSubmit={sendNewUser} /></div>


            <Footer/>

        </header>

    )}
export default FormUserPage;