import {Fragment, useState} from "react";
import {useNavigate} from "react-router-dom";
import wallpaper from "../../assets/images/woman-illustration_1920.webp";
import Credits from "../../components/Credits";

function Home() {
    const [creditsStatus, creditsStatusUpdate] = useState(false);
    const Navigate = useNavigate();
    return (
        <Fragment >
                <div id = "Home">
                    <div>
                        <img  id = "Home__wallpaper" src={wallpaper} alt="wallpaper"/>
                    </div>
                    <div id = "Home__titleAndbuttons">
                        <h1 id = "Home__title" >MON PLAN DE<br/>PROTECTION<br/>PERSONNALISE</h1>
                        <div id = "Home__buttons">
                            <input id = "Home__buttons--inscription" onClick={() => Navigate("/Menu")}
                                className = "button" type = "button" value = "Entrez"/>
                        </div>
                    </div>
                        <p id = "Home__credits" onClick={() => creditsStatusUpdate(true)}>Credits</p>
                        {creditsStatus === true? <Credits creditsStatus = {creditsStatus} creditsStatusUpdate = {creditsStatusUpdate}/> : null};
                </div>
        </Fragment>
    )
}
export default Home;