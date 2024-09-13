import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//import FunctionComponent from "./Lab9_1";
//import PropsUse from "./Lab 10/Lab10_1";
//import Event from "./Lab 10/Lab10_2";
//import {Greeting1, Greeting2, Greeting3} from "./Lab 10/Lab10_3";
//import DisplayProducts from "./Lab 11/Lab11_4";
import App from "./Lab 12/Lab12_2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
