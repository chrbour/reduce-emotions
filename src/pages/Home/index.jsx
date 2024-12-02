import {Fragment, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CreditsContext} from '../../utils/context/CreditsContext'
import wallpaper from "../../assets/images/woman-illustration_1920.webp";
import Credits from "../../components/Credits";

function Home() {
    const {creditsStatus} = useContext(CreditsContext);
    const {creditsStatusUpdate} = useContext(CreditsContext);
    const Navigate = useNavigate();
    const displayCredits = () => {
        creditsStatus == true? creditsStatusUpdate(false) : creditsStatusUpdate(true);
    }
    const handleInscription = () => {
        Navigate("/Menu");
    }
    return (
        <Fragment >
                <div id = "Home">
                    <div>
                        <img  id = "Home__wallpaper" src={wallpaper} alt="wallpaper"/>
                    </div>
                    <div id = "Home__titleAndbuttons">
                        <h1 id = "Home__title" >MON PLAN DE<br/>PROTECTION<br/>PERSONNALISE</h1>
                        <div id = "Home__buttons">
                            <input id = "Home__buttons--inscription" onClick={handleInscription}
                                className = "button" type = "button" value = "Inscription"/>
                            <input id = "Home__buttons--connexion" 
                                className = "button" type = "button" value = "Connexion" />
                        </div>
                        <p id = "Home__credits" onClick={displayCredits}>Credits</p>
                        {creditsStatus == true? <Credits/> : null}
                    </div>
                </div>
        </Fragment>
    )
}
export default Home;