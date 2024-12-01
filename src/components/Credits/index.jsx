import {CreditsContext} from "../../utils/context/CreditsContext";
import {useContext} from "react";

function Credits(){
    const {creditsStatusUpdate} = useContext(CreditsContext);
    const closeCredits = () => {
        creditsStatusUpdate(false);
    }
    return(
        <div id = "Credits">
            <div id = "Credits__close" onClick = {closeCredits}><strong>X</strong></div>
            <div>
                <h2>CREDITS</h2>
                <p>Merci à <b>PIXABAY</b> pour les photos et images libres de droits qui illustrent ce site.</p>
                <p>Les liens vers les ressoureces en ligne utilisées sont:</p>
                <ul>=&gt; <u>Relaxation profonde:</u>
                    <li>Lien 1: https://www.youtube.com/watch?v=rpB05dacHDo</li>
                    <li>Lien 2: https://www.youtube.com/watch?v=bM3mWlq4M8E</li>
                    <li>Lien 3: https://www.youtube.com/watch?v=8vJMzuDLxig</li>
                </ul>
                <ul>=&gt; <u>Cohérence cardiaque:</u>
                    <li>Lien 1: https://www.youtube.com/watch?v=Q0JP_TV6sgY</li>
                    <li>Lien 2: https://www.youtube.com/watch?v=14-yffdsy1w</li>
                    <li>Lien 3: https://www.youtube.com/watch?v=PKopEuCzHNo</li>
                </ul>
            </div>
        </div>
    )
}

export default Credits;