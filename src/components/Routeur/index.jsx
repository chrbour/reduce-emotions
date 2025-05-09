import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SavingParamsProvider from "../../utils/context/SavingParamsProvider";
import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Anchoring from "../../pages/Anchoring";
import STOP  from "../../pages/STOP";
import TIPP from "../../pages/TIPP";
import EmotionsWheel from "../../pages/EmotionsWheel";
import WebResources from "../../pages/Webresources";
import Thermometer from "../../pages/Thermometer";
import Configure from "../../pages/Configure";
import Error from "../../pages/Error";

function Routeur() {
    return (
    <React.StrictMode>
        <Router>
            <SavingParamsProvider>
                <Routes>
                    <Route path = "/" element = {<Home/>} />  
                    <Route path = "/Menu" element = {<Menu />} />
                    <Route path = "/TIPP" element = {<TIPP />} />
                    <Route path = "/Anchoring" element = {<Anchoring />} />
                    <Route path = "/STOP" element = {<STOP />} />
                    <Route path = "/EmotionsWheel" element = {<EmotionsWheel />} />
                    <Route path = "/WebResources" element = {<WebResources />} />
                    <Route path = "/Thermometer" element = {<Thermometer />} />
                   <Route path = "/Configure" element = {<Configure/>} />                
                    <Route path = "*" element = {<Error/>} />
                </Routes>
            </SavingParamsProvider>
        </Router>
    </React.StrictMode>
    )
}
export default Routeur;