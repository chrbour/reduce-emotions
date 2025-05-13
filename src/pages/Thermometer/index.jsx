
import {useState, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {EmotionsContext} from '../../utils/context/Context';
import styled from 'styled-components';
import Emotion from '../../components/Emotion';
import thermometer from "../../assets/svg/Thermomètre_Humeurs.svg";
import triangleWhite from '../../assets/svg/triangleWhite.svg';
import triangleRed from '../../assets/svg/triangleRed.svg';
import greenCloud from '../../assets/svg/Nuage_vert.svg';
import yellowCloud from '../../assets/svg/Nuage_jaune.svg';
import redCloud from '../../assets/svg/Nuage_rouge.svg';
import brownCloud from '../../assets/svg/Nuage_marron_avec_pieds_noirs.svg';
import blackCloud from '../../assets/svg/Nuage_noir_avec_pieds_noirs.svg';


const Frame = styled.div`
    border: 25px solid;
    border-color: ${({color}) => color};
    background-color: ${({color}) => color === 'rgb(202, 202, 202)'? color : '#FFFFFF'};
    color: ${({color}) => color};
`
function Thermometer() {
    let Navigate = useNavigate();
    const {defaultEmotions} = useContext(EmotionsContext);

    const allEmotions = {
        noEmotion : {
            name:"",
            icon: "",
            color: "rgb(202, 202, 202)",
            title : "",
        },
        greenEmotion:{
            name: "greenEmotion",
            icon: greenCloud,
            color: "#5FCE84",
            title: "Je me sens bien",
        },
        yellowEmotion: {
            name: "yellowEmotion",
            icon:  yellowCloud,
            color: "#EAB801",
            title: "Je suis nerveux, triste",
        },
        redEmotion: {
            name: "redEmotion",
            icon: redCloud,
            color: "#D40101",
            title: "Je suis fâché, angoissé", 
        },
        brownEmotion: {
            name: "brownEmotion",
            icon: brownCloud,
            color: "#791A1A",
            title: "Je suis furieux, agacé"
        },
        blackEmotion: {
            name: "blackEmotion",
            icon: blackCloud,
            color: "#000000",
            title: "J'ai des idées noires",
        }
    }
    const preferencesList = "";
    let preferences = {};
    const [feelEmotion, setFeelEmotion] = useState('noEmotion');
    const [containerColor, setContainerColor] = useState(allEmotions[{feelEmotion}.color]);
    preferencesList === "" ? preferences = defaultEmotions : preferences = preferencesList;
    allEmotions.greenEmotion.action = preferences.greenEmotion.action;
    allEmotions.yellowEmotion.action = preferences.yellowEmotion.action;
    allEmotions.redEmotion.action = preferences.redEmotion.action;
    allEmotions.brownEmotion.action = preferences.brownEmotion.action;
    allEmotions.blackEmotion.action = preferences.blackEmotion.action;
    return (
        <div id = "thermometer">
            <div id = "thermometer__titleContainer">
                <h1 id = "thermometer__titleContainer--primary">Thermomètre des émotions</h1>
                <i className ="fa-solid fa-gear" onClick = {() => Navigate("/Configure")}></i>
                <div id = "thermometer__titleContainer--bubble">Paramétrage des préférences</div>
            </div>
            <p id = "thermometer__text">Comment te sens-tu?</p>
            <div id = "thermometer__imageContainer">
                <div id = "thermometer__imageContainer--image" >
                    <img src = {thermometer} alt="Thermomètre des émotions" />
                    <div id = "thermometer__imageContainer--triangle">
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {setFeelEmotion('blackEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {setFeelEmotion('brownEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {setFeelEmotion('redEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {setFeelEmotion('yellowEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {setFeelEmotion('greenEmotion')}}/>
                        </div>
                    </div>
                    <Frame id = "thermometer__imageContainer--rectangle" color = {containerColor}>
                        <Emotion emotion = {allEmotions[feelEmotion]} setContainerColor = {setContainerColor} />
                    </Frame>
                </div>
                <div id = "thermometer__arrowTurnLeftContainer" className = "returnIconContainer"> 
                    <i id = "thermometer__arrowTurnLeftIcon" 
                        className = "fa-solid fa-rotate-left returnIcon"
                        onClick = {() => Navigate("/Menu")}>
                    </i>
                </div> 
            </div>
        </div>
    )
}
export default Thermometer    ;