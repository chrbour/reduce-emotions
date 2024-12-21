
import {useNavigate} from "react-router-dom";
import thermometer from "../../assets/svg/Thermomètre_Humeurs.svg"

function Thermometer() {
    let Navigate = useNavigate();
    return (
        <div id = "Thermometer" className = "page">
            <div id = "Thermometer__title">
                <h1 id = "Thermometer__title--primary">Thermomètre des émotions</h1>
            </div>
            <img src={thermometer} alt="Thermomètre des émotions" />
            <div id = "Thermometer__arrowTurnLeftContainer" className = "returnIconContainer"> 
                <i id = "Thermometer__arrowTurnLeftIcon" 
                    className = "fa-solid fa-rotate-left returnIcon"
                    onClick = {() => Navigate("/Menu")}></i>
            </div>
        </div>
    )
}
export default Thermometer    ;