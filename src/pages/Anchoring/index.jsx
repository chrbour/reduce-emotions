
import {useNavigate} from "react-router-dom";
import ancrage from "../../assets/images/ancrage.webp"

function Anchoring() {
    let Navigate = useNavigate();
    function handleReturn(){
        Navigate("/Menu");
    }
    return (
        <div id = "Anchor" className = "page">
            <div id = "Anchor__title">
                <h1 id = "Anchor__title--primary">Techniques d&apos;Ancrage</h1>
                <h3 id = "Anchor__title--secondary">Dr Igor THIRIEZ</h3>
            </div>
            <div id = "Anchor__imageContainer" className = "imageContainer">
                <img id = "Anchor__image" src = {ancrage} alt = "Technique d'Ancrage" />
            </div>
            <div id = "Anchor__arrowTurnLeftContainer" className = "returnIconContainer"> 
                <i id = "Anchor__arrowTurnLeftIcon" 
                    className = "fa-solid fa-rotate-left returnIcon"
                    onClick = {handleReturn}></i>
            </div>
        </div>
    )
}
export default Anchoring;