import React, {FC, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App : FC = () => {
    const [count, setCount] = useState(0);
    const add = ()=>{
        setCount(count +1 );
    }

    useEffect( () =>{
        document.title = "mon titre " + count;
    })
  return (
    <div className="App">
      <header className="App-header">
        {/*<Title title="essai de titre"  subtitle='test'  complement="base 1"/>*/}
        <img src={logo} className="App-logo" alt="logo" />
          <button onClick={add}>Add One </button>

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
interface PropTitle {
  title : string;
  subtitle : string;
    complement? : string;
    // ? Donc optionnel

}

const Title :FC<PropTitle> = ({title, subtitle, complement})=>{
    const [color,setColor] = useState<string>();
    const changeColor = ()=>{
        color === "red" ? setColor("yellow") : setColor("red");
    }
  return(
      <>
      <h1>{title} - {color}</h1>
      <h2>{subtitle}  - {color}</h2>
          {complement && <h3>{complement}</h3>}
          <button onClick={changeColor}>TEST </button>
      </>
  )
}
export default App;
