
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListOfActions from '../../components/ListOfActions'
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
    const Emotion = ({emotion}) => {
        setContainerColor(emotion.color);
        return(
            <>
                {
                emotion.title != '' ? 
                    <>
                        <div>
                            <img src = {emotion.icon} alt = "Icône émotion" id = 'thermometer__frameEmotion'/>
                            <h2 id = "emotion__title">{emotion.title}</h2>
                        </div>
                        <ListOfActions display = {emotion} />
                    </>
                    : null
                }
            </>
        )
    }
    
    Emotion.propTypes = {
        emotion: PropTypes.object
    }
    
    const feeling = {
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
    const defaultList = {
        greenEmotion: {
            action: ["Ecoute de la musique", "Bouge ou fais du sport", "Souris et pratique la gratitude",
            "Fais des pas vers tes objectifs"],
        },
        yellowEmotion: {
            action: ["Ecoute de la musique", "Bouge ou fais du sport", "Pense à un endroit paisible", 
            "Détends-toi et réessaye"],
        },
        redEmotion: {
            action: ["Sors prendre l'air", "Bouge ou fais du sport", "Respire profondément",
                "Pense à un endroit paisible", "Pratique des techniques d'ancrage"],
            },
        brownEmotion: {
            action: ["Respire profondément", "Arrête-toi et sors", "Serre un fruit glacé dans tes mains",
                "Frappe un oreiller/sac de frappe"],
            },
        blackEmotion: {
            action: ["Demande de l'aide", "Prends ton traitement prescrit en cas de crise", "Appelle les urgences"],
            },
        }
    const [feelEmotion, setFeelEmotion] = useState('noEmotion');
    const [containerColor, setContainerColor] = useState(feeling[{feelEmotion}.color]);
    preferencesList === "" ? preferences = defaultList : preferences = preferencesList;
    feeling.greenEmotion.action = preferences.greenEmotion.action;
    feeling.yellowEmotion.action = preferences.yellowEmotion.action;
    feeling.redEmotion.action = preferences.redEmotion.action;
    feeling.brownEmotion.action = preferences.brownEmotion.action;
    feeling.blackEmotion.action = preferences.blackEmotion.action;
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
                        <Emotion emotion = {feeling[feelEmotion]} />
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