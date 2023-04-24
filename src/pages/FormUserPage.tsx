import Title from "../components/Title";
import Footer from "../components/Footer";
import '../assets/css/App.css';
import FormUser from "../components/FormUser";
import React, {FC, useState, useEffect, Dispatch} from "react";
import {addUser} from "../services/user.service";
import User from "../types/User";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import {IoEyeSharp} from "react-icons/io5";



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





            <Container>
                <Col md={12}>
                    <Row>
                        <Title title="Ajouter un utilisateur"/>
                    </Row>
                </Col>


                <Row>
                    <div> <FormUser onSubmit={sendNewUser} /></div>
                </Row>

                <Row>

                <Link to ={'/users/'}>
                    <Button variant="primary" className='iconButton'><IoEyeSharp /> Retour aux utilisateurs</Button>
                </Link>
                </Row>

            </Container>



            <Footer/>

        </header>

    )}
export default FormUserPage;