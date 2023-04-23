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



                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
