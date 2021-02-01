import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Home from '../src/pages/Home/index';
import Bootstrap from "./CSS/bootstrap";
import reportWebVitals from './reportWebVitals';
import NavBar from "./componentes/navBar";


ReactDOM.render(
  <React.StrictMode>
      <Bootstrap/>
      <NavBar />
      <header className="App-header">
          <Home />
      </header>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
