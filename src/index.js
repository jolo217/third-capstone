import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import NavBar from './components/nav';

ReactDOM.render((
    <Provider>
        <BrowserRouter>
            <div>
                <switch>
                    <NavBar />
                    <App />
                </switch>
            </div>
        </BrowserRouter>
    </Provider>   
), document.getElementById('root'));

