
import {useNavigate} from "react-router-dom";
import netWork from "../../assets/images/network_1280.webp";

function Webresources() {
    let Navigate = useNavigate();
    return (
        <div id = "Webresources" className = "page">
            <div id = "Webresources__title">
                <h1 id = "Webresources__title--primary">Ressources en ligne</h1>
            </div>
            <div id = "Webresources__imageContainer" className = "imageContainer">
                <img src={netWork} alt="Internet" id = "Webresources__image" style={{height:'350px'}}/>
                <h3 id = "Webresources__relaxationProfonde">Relaxation profonde</h3>
                <div>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=rpB05dacHDo" target ="_blank">Lien 1</a></button>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=14-yffdsy1w" target ="_blank">Lien 2</a></button>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=8vJMzuDLxig" target ="_blank">Lien 3</a></button>                
                </div>
                <h3 id = "Webresources__cohérenceCardiaque">Cohérence cardiaque</h3>
                <div>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=Q0JP_TV6sgY" target ="_blank">Lien 1</a></button>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=bM3mWlq4M8E" target ="_blank">Lien 2</a></button>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=MepDpceB-28" target ="_blank">Lien 3</a></button>                
                </div>
                <h3 id = "Webresources__exercicesPhysiques">Exercices physiques</h3>
                <div>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=O1l1DBqYUfc" target ="_blank">Lien 1</a></button>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=nHzveG3uyho" target ="_blank">Lien 2</a></button>
                    <button type = "button" className = "Webresources__button"><a href="https://www.youtube.com/watch?v=3bxihqPKF08" target ="_blank">Lien 3</a></button>                
                </div>
            </div>    
            <div id = "Webresources__arrowTurnLeftContainer" className = "returnIconContainer"> 
                <i id = "Webresources__arrowTurnLeftIcon" 
                    className = "fa-solid fa-rotate-left returnIcon"
                    onClick = {() => Navigate("/Menu")}></i>
            </div>
        </div>
    )
}
export default Webresources;