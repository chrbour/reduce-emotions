
import {useNavigate} from "react-router-dom";
import ancrage from "../../assets/images/ancrage.webp"

function Anchoring() {
    let Navigate = useNavigate();
    return (
        <div id = "Anchor" className = "page">
            <div id = "Anchor__title">
                <h1 id = "Anchor__title--primary">Techniques d&apos;Ancrage</h1>
                <h3 id = "Anchor__title--secondary">Dr Igor THIRIEZ</h3>
                <p>Ces techniques visent à soulager les états de détresse émotionnelle et à lutter contre la dissociation. 
                    Ces techniques doivent être répétées très régulièrement, notamment en dehors des crises, 
                    pour être efficaces.</p>
                <p>Bleu = eau et sentiments positifs <br />
                    Orange = objets et exercices mentaux <br />
                    Jaune = Orientation et perception <br />
                    Vert = Action et sensation</p>
            </div>
            <div id = "Anchor__imageContainer" className = "imageContainer">
                <img id = "Anchor__image" src = {ancrage} alt = "Technique d'Ancrage" />
            </div>
            <div id = "Anchor__arrowTurnLeftContainer" className = "returnIconContainer"> 
                <i id = "Anchor__arrowTurnLeftIcon" 
                    className = "fa-solid fa-rotate-left returnIcon"
                    onClick = {() => Navigate("/Menu")}></i>
            </div>
        </div>
    )
}
export default Anchoring;