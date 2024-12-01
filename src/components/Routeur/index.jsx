import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import {CreditsProvider} from "../../utils/context/CreditsProvider";

function Routeur() {
    console.log('routeur OK');
    return (
    <React.StrictMode>
        <Router>
            <CreditsProvider>
                <Routes>
                        <Route path = "/" element = {<Home/>} />  
                </Routes>
            </CreditsProvider>
        </Router>
    </React.StrictMode>
    )
}
export default Routeur;