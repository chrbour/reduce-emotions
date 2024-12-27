import {useNavigate} from "react-router-dom";
import stop from "../../assets/images/stop-drawn_1280.webp"

function STOP() {
    let Navigate = useNavigate();
    return (
        <div id = "Stop" className = "page">
            <div id = "Stop__title">
                <h1 id = "Stop__title--primary">Compétence STOP</h1>
                <p>Lorsque vous réagissez de façon impulsive, vous n&apos;avez pas le temps d&apos;utiliser vos compétences et vous centrer dans l&apos;esprit éclairé. <br />
                Pour utiliser vos compétences, vous devez vous empêcher de réagir. <br />
                Pour garder le contrôle, utilisez la compétence STOP.</p>
            </div>
            <div id = "Stop__imageContainerAndText">
                <div id = "Stop__imageContainer" className = "imageContainer">
                    <img id = "Stop__image" src = {stop} alt = "Compétence STOP" />
                </div>
                <div id = "Stop__textContainer">
                    <div id = "Stop__text">
                        <p className = "Stop__text--initials">S</p>
                        <p className = "Stop__text--legend">Stop:</p>
                        <p className = "Stop__text--details">Je fais une pause.<br/>J&apos;arrête ce que je suis en train de faire et je peux même poser ma main sur un endroit précis de mon corps sur lequel je souhaite porter mon attention.</p>
                        <p className = "Stop__text--initials">T</p>
                        <p className = "Stop__text--legend">Temps calme:</p>
                        <p className = "Stop__text--details">Je reste concentré sur ma respiration pour revenir au calme.</p>
                        <p className = "Stop__text--initials">O</p>
                        <p className = "Stop__text--legend">Observation:</p>
                        <p className = "Stop__text--details">J&apos;observe ce qui se passe en moi, ce que je ressens dans mon corps en accueillant toutes les sensations sans jugement. Qu&apos;est-ce que j&apos;éprouve?
                        <br/>Quelles sont les émotions, les sensations qui me traversent?</p>
                        <p className = "Stop__text--initials">P</p>
                        <p className = "Stop__text--legend">Présence:</p>
                        <p className = "Stop__text--details">Je reste en contact avec cette expérience quelques instants et je prends conscience que les sensations, les émotions, sont comme des vagues qui finissent par redescendre puis disparaître.</p>
                    </div>
                </div>
            </div>
            <div id = "Stop__arrowTurnLeftContainer" className = "returnIconContainer"> 
                <i id = "Stop__arrowTurnLeftIcon" 
                    className = "fa-solid fa-rotate-left returnIcon"
                    onClick = {() => Navigate("/Menu")}></i>
            </div>
        </div>
    )
}
export default STOP;