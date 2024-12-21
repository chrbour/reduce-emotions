import wallpaper from "../../assets/images/woman-illustration_1920.webp"
import {useNavigate} from "react-router-dom";

export default function Menu(){
    let Navigate = useNavigate();
    return (
        <div id = "Menu">
            <div id = "Menu__imageContainer">
                <img id = "Menu__imageContainer--image" src = {wallpaper} alt = "wallpaper"/>
            </div>
            <div id = "Menu__options">
                <h2 id = "Menu__options--title">Que veux-tu consulter?</h2>
                <input id = "Menu__options--thermometre" className = "button" 
                    type = "button" value = "Thermomètre des émotions" onClick = {() => Navigate('/Thermometer')}/>
                <input id= "Menu__options--roueDesEmotions" className = "button"
                    type = "button" value = "Roue des émotions" onClick = {() => Navigate("/EmotionsWheel")}/>
                <input id= "Menu__options--techniquesDancrage" className = "button"
                    type = "button" value = "Techniques d'Ancrage" onClick = {() => Navigate("/Anchoring")} />
                    <input id= "Menu__options--competenceStop" className = "button"
                    type = "button" value = "Compétence STOP" onClick =  {() => Navigate("/STOP")}/>
                <input id= "Menu__options--méhtodeTipp" className = "button"
                    type = "button" value = "Méthode TIPP" onClick = {() => Navigate("/TIPP")}/>
                <input id= "Menu__options--ressourcesEnLigne" className = "button"
                    type = "button" value = "Ressources en ligne" onClick = {() => Navigate("/WebResources")}/>
                <div id = "Menu__options--arrowTurnLeftContainer" className = "returnIconContainer"> 
                    <i id = "Menu__options--arrowTurnLeftIcon" 
                        className = "fa-solid fa-rotate-left returnIcon" onClick = {() => Navigate("/")}></i>
                </div>
            </div>
        </div>
    )
}