import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';

const App : FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="essai de titre"  subtitle='test' />
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
interface PropTitle {
  title : string;
  subtitle : string;
}

const Title :FC<PropTitle> = ({title, subtitle})=>{
  return(
      <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      </>
  )
}
export default App;
