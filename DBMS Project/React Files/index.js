import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import D from'./Stylesheet'
// import './mystyle.css'
import { BrowserRouter } from "react-router-dom";
// import './signup.css';
// import './cas.css'
import './s.css';
// import F from './login'
import App from "./cass";;
// import App from './App';
// import Basic from './Basic';
// import Header from './Header';
// import Body from './Body';
// import * as serviceWorker from './serviceWorker';
// import Dynamiclist from './Dynamiclist';
ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
