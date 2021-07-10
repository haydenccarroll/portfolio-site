import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';
import App from './components/app';

function main() {
    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );
}

document.addEventListener("DOMContentLoaded", main);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
