import React from 'react';
// import { TextField } from "./TextField";

// const App: React.FC = () => {
//   return <div>
//     <TextField text='hello' person={{firstName: '', lastName: ''}}/>
//   </div>
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header buttonText='Click me!' />
      <header className="App-header">
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