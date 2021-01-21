import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import { StateProvider } from './state/stateContext';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <StateProvider>
                <App />
            </StateProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);