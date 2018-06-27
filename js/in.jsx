import React from 'react';
import ReactDOM from 'react-dom';
// import {
//     HashRouter,
//     Route,
//     Link,
//     Switch,
//     NavLink,
// } from 'react-router-dom';

import {App} from "./App.jsx";

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});