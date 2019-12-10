import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './rectangle.css';
import './equipo.css'
import Menu from './Menu'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import './prova.css'

const routing = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
ReactDOM.render(
    routing, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
