import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home";

function Routeur() {
    return (
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path = "/" element = {<Home/>} />
            </Routes>
        </Router>
    </React.StrictMode>
    )
}
export default Routeur;