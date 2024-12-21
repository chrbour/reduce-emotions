import React from "react";
import {CreditsProvider} from "../../utils/context/CreditsProvider";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";

import Anchoring from "../../pages/Anchoring";
import STOP  from "../../pages/STOP";
import TIPP from "../../pages/TIPP";
import EmotionsWheel from "../../pages/EmotionsWheel";
import WebResources from "../../pages/Webresources";
import Thermometer from "../../pages/Thermometer";

function Routeur() {
    return (
    <React.StrictMode>
        <Router>
            <CreditsProvider>
                <Routes>
                        <Route path = "/" element = {<Home/>} />  
                        <Route path = "/Menu" element = {<Menu />} />
                        <Route path = "/TIPP" element = {<TIPP />} />
                        <Route path = "/Anchoring" element = {<Anchoring />} />
                        <Route path = "/STOP" element = {<STOP />} />
                        <Route path = "/EmotionsWheel" element = {<EmotionsWheel />} />
                        <Route path = "/WebResources" element = {<WebResources />} />
                        <Route path = "/Thermometer" element = {<Thermometer />} />
                </Routes>
            </CreditsProvider>
        </Router>
    </React.StrictMode>
    )
}
export default Routeur;