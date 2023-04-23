import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
import {Route} from "react-router-dom";
import TaskByUserIdPage from "../../pages/TaskByUserIdPage";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/' >
                        Accueil
                    </NavLink>
                    <NavLink to='/tasks' >
                        Tâches
                    </NavLink>
                    <NavLink to='/users' >
                        Utilisateurs
                    </NavLink>
                    <NavLink to='/users/6444180a50484e6bb0929709/tasks' >
                        user tasks
                    </NavLink>


                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
