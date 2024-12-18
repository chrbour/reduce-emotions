
import {useNavigate} from "react-router-dom";
import ice from "../../assets/images/ice_1280.webp";
import muscles from "../../assets/images/exercise-ball_1280.webp";
import intense from "../../assets/images/woman-sport-image_1280.webp";
import zen from "../../assets/images/zen.png"

function TIPP() {
    let Navigate = useNavigate();
    return (
        <div id = "TIPP" className = "page">
            <div id = "TIPP__title">
                <h1 id = "TIPP__title--primary">Méthode TIPP</h1>
                <p id = "TIPP__title--secondary">La méthode TIPP est issue de la Thérapie 
                    comportementale Dialectique (DBT) qui vise à fournir des techniques rapides 
                    et efficaces pour gérer une attaque de panique ou un stress intense.</p>
            </div>
            <div id = "TIPP__detailsContainer" className = "imageContainer">
                <div id = "TIPP__temperature" className = "rectangleTipp">
                    <div id = "TIPP__temperature--imageContainer" className = "TIPP__imageContainer">
                        <img id = "TIPP__temperature--image" src = {ice} 
                        className = "TIPP__image" alt = "Ice" />
                    </div>
                    <div id = "TIPP__temperature--paragraph" className = "TIPP__paragraph">
                        <h2><span>T</span>emperature</h2>
                        <p>Vous pouvez, soit vous asperger d&apos;eau froide, prendre une douche 
                            froide (mais pas trop), tenir un glaçon dans votre main ou vous frotter le visage avec.
                            Cela diminue le rythme cardiaque. <br />En cas de problème de santé, passez cette étape
                            ou consultez un médecin.</p>
                    </div>
                </div>
                <div id = "TIPP__intenseExercise" className = "rectangleTipp" >
                    <div id = "TIPP__intenseExercise--imageContainer" className = "TIPP__imageContainer">
                        <img id = "TIPP__intenseExercise--image" src = {intense} 
                        className = "TIPP__image" alt = "Intense Exercise" />
                    </div>
                    <div id = "TIPP__intenseExercise--paragraph" className = "TIPP__paragraph">
                        <h2><span>I</span>ntense exercise</h2>
                        <p>Pratiquez une activité physique intense, telle que la course, les squats ou tout autre 
                            exercice actif pendant 10-15 minutes, mais n&apos;en faites pas trop. <br />
                            L&apos;effort physique permet de dépenser l&apos;énergie accumulée à cause d&apos;émotions accablantes.</p>
                    </div>
                </div>
                <div id = "TIPP__pacedBreathing" className = "rectangleTipp">
                    <div id = "TIPP__pacedBreathing--imageContainer" className = "TIPP__imageContainer">
                        <img id = "TIPP__pacedBreathing--image" src = {zen} 
                        className = "TIPP__image" alt = "Paced breathing" />
                    </div>
                    <div id = "TIPP__pacedBreathing--paragraph" className = "TIPP__paragraph">
                        <h2><span>P</span>aced breathing</h2>
                        <p>Inspirez profondément par le nez (respiration abdominale) pendant 4 secondes, puis expirez par la bouche pendant 6 secondes.
                            Faites cela pendant 1 à 2 minutes.<br/>La respiration profonde aide à réguler les émotions en calmant le système nerveux.</p>
                    </div>
                </div>
                <div id = "TIPP__pairedMuscleRelaxation" className = "rectangleTipp">
                    <div id = "TIPP__pairedMuscleRelaxation--imageContainer" className = "TIPP__imageContainer">
                        <img id = "TIPP__pairedMuscleRelaxation--image" src = {muscles} 
                        className = "TIPP__image" alt = "Paired Muscle Relaxation" />
                    </div>
                    <div id = "TIPP__pairedMuscleRelaxation--paragraph" className = "TIPP__paragraph">
                        <h2><span>P</span>aired muscle relaxation</h2>
                        <p>Contractez pendant 5 secondes puis relâchez progressivement différents muscles du corps en vous concentrant sur les sensations de tension et de détente.<br/>
                        La respiration musculaire progressive aide à réduire la tension physique et à favoriser un sentiment de détente.</p>
                    </div>
                </div>
            </div>
            <div id = "TIPP__arrowTurnLeftContainer" className = "returnIconContainer"> 
                <i id = "TIPP__arrowTurnLeftIcon" 
                    className = "fa-solid fa-rotate-left returnIcon"
                    onClick = {() => Navigate("/Menu")}></i>
            </div>
        </div>
    )
}
export default TIPP;