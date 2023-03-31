import Header from "../components/Header";
import {FC} from "react";
import Footer from "../components/Footer";

const Home:FC = ()=>{
    return(
        <div>
        <Header/>
        <div>Contenu de la page</div>
            <Footer/>
        </div>
    )
}