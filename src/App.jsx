import React from 'react';
import './App.css'
import {URL_LOGIN, URL_REGISTRATI} from "./utility/constants/urlConstants";
import Login from "./components/Login";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Registrati from "./components/Registrati";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={URL_LOGIN} element={<Login/>}/>
                    <Route path={URL_REGISTRATI} element={<Registrati/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App

