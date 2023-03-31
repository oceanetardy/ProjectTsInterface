import Header from "../components/Header";
import {FC} from "react";
import Footer from "../components/Footer";
import ListUsers from "../components/ListUsers";

const Home:FC = ()=>{
    return(
        <div>
        <Header/>
        <div> <ListUsers /></div>
            <Footer/>
        </div>
    )
}