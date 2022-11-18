import React from 'react';
import './App.css'
import {URL_HOME, URL_LOGIN, URL_REGISTRATI} from "./utility/constants/urlConstants";
import Login from "./components/Login";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Registrati from "./components/Registrati";
import Home from "./components/Home";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={URL_LOGIN} element={<Login/>}/>
                    <Route path={URL_REGISTRATI} element={<Registrati/>}/>
                    <Route path={URL_HOME} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App

