import React, {FC, useEffect, useState} from 'react';
import Title from "./components/Title";
import logo from './assets/logo.svg';
import './assets/css/App.css';
import ListUsers from "./components/ListUsers";

const App : FC = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("Zero");

    const add = ()=>{
        if(count > 5) setValue("debord");
        setCount(count +1 );
    }

    useEffect( () =>{
        document.title = "mon titre " + value;
    }, [value])
  return (
    <div className="App">
      <header className="App-header">
          <Title title="PROJET NFP 119"  subtitle='Application de gestion de tâches'  complement="Node JS / React / MongoDB"/>
          <ListUsers/>

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
      </header>
    </div>
  );
}
export default App;
