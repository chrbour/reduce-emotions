import {useNavigate} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import wheel from "../../assets/images/emotionsWheel.png";
import rightArrow from "../../assets/svg/ArrowTurnRightWhite.svg";
import rightArrowHover from '../../assets/svg/ArrowTurnRightRed.svg';
import leftArrow from "../../assets/svg/ArrowTurnLeftWhite.svg";
import leftArrowHover from '../../assets/svg/ArrowTurnLeftRed.svg';
import triangle from '../../assets/svg/triangleWhite.svg';

const RightArrow = styled.div`
    visibility: ${({angle, triangle}) => 
        (angle<90 && triangle === 'right') || (angle<95 && triangle === 'left') ? 'visible' : 'hidden'};
`
const RightTriangle = styled.img`
    visibility: ${({triangleActivated}) => triangleActivated === "right" ? 'visible' : 'hidden'}
`
const Wheel = styled.img`
    transition: 0.3s ease-in-out;
    transform: rotate(${({angle}) => angle}deg);
`
const LeftTriangle = styled.img`
    visibility: ${({triangleActivated}) => triangleActivated === "left" ? 'visible' : 'hidden'}
`
const LeftArrow = styled.div`
    visibility: ${({angle, triangle}) => 
        (angle < -75 && triangle === 'left') || (angle < -80 && triangle === 'right')? 'hidden' : 'visible'};
    setTriangleActivated('right');
`
const EmotionBase = styled.span`
    font-family: Arial;
    color: black;
    background-color: ${({couleur}) => couleur};
    padding: 0 10px;
`
const EmotionAssociated = styled.span`
    font-family: Arial;
    color: black;
    background-color: ${({couleur}) => couleur};
    padding: 0px 10px;
`
const EmotionIntensity = styled.span`
    font-family: Arial;
    color: black;
    background-color: ${({couleur}) => couleur};
    padding: 0px 10px;
    margin: 0;
`
const NeedAssociated = styled.span`
    color: ${({couleur}) => couleur};
    text-shadow: 1px 1px #000000;
`

function EmotionsWheel() {
    const [angle, setAngle] = useState(90);
    const [triangleActivated, setTriangleActivated] = useState('right');
    const [emotion, setEmotion] = useState(0);
    const [associatedEmotion, setAssociatedEmotion] = useState(3);
    const [intensityEmotion, setIntensityEmotion] = useState(7);
    const emotions = {
        emotionBase: ['Colère', 'Peur', 'Surprise', 'Heureux', 'Tristesse', 'Dégoût'],
        couleurBase: ['#D2232A', '#784D9F', '#1075BE', '#448C36', '#B5A933', '#DB812C'],
        besoinAssocie: ['Besoin de justice, sens', 'Besoin de sécurité', 'Besoin de comprendre', 'Besoin de partager', 'Besoin de réconfort', 'Besoin de dignité, de propreté'],
        emotionsAssociees: [
            ['Critique', 'Distant', 'Frustré', 'Agressif', 'En colère', 'Haineux', 'Menacé', 'Blessé'],
            ['Humilié', 'Rejeté', 'Docile', 'Insécure', 'Anxieux', 'Apeuré'],
            ['Surpris', 'Confu', 'Etonné', 'Excité'],
            ['Joyeux', 'Intéressé', 'Fier', 'Accepté', 'Fort', 'Paisible', 'Intime', 'Optimiste'],
            ['Ennui', 'Solitude', 'Dépression', 'Désespoir', 'Abandon', 'Culpabilité'],
            ['Evitement', 'Terrible', 'Déception', 'Réprobation']
        ],
        couleursAssociees: ['#E4647B', '#9070B3', '#6DBAE6', '#A9D26A', '#E9D670', '#FAAC57'],
        intensites: [
            ['Sarcastique', 'Sceptique', 'Suspect', 'Retiré', 'Irrité', 'Furieux', 'Hostile', 'Provocant', 'Enragé', 'Furieux', 'Défiant', 'Amer', 'Jaloux', 'Insécure', 'Dévasté', 'Embarrassé'],
            ['Ridiculisé', 'Non respecté', ' Exclus', 'Inadéquat', 'Insignifiant', 'Sans valeur', 'Inférieur', 'Incapable', 'Préoccupé', 'Accablé', 'Craintif', 'Terrifié'],
            ['Choqué', 'Consterné', 'Désillusionné', 'Perplexe', 'Abasourdi', 'Effroi', 'Avide', 'Energique'],
            ['Libéré', 'Extasié', 'Amusé', 'Curieux', 'Important', 'Confiant', 'Respecté', 'Accompli', 'Courageux', 'Provocant', 'Aimant', 'Optimiste', 'Sensible', 'Espiègle', 'Ouvert', 'Inspiré'],
            ['Indifférent', 'Amorphe', 'Isolé', 'Abandonné', 'Vide', 'Inférieur', 'Vulnérable', 'Impuissant', 'Intimidé', 'Ignoré', 'Honteux', 'Remords'],
            ['Hésitant', 'Aversion','Détestable', 'Dégoût', 'Révolté', 'Répugnant', 'Aversion', 'Jugement']
        ], 
        couleursIntensite: ['#F6ADB6', '#D0BDDD', '#C6E2F7', '#DCEBC2', '#E6D890', '#FDDBB6']
    }
    const turnRight = () => {
        let base = emotion;
        let assoc = associatedEmotion;
        let intens = intensityEmotion
        if ((angle < 90 && triangleActivated === 'right') || (angle < 95 && triangleActivated ==='left')){
            setAngle(angle + 5);
            if (intens + 1 > emotions.intensites[base].length-1){
                base + 1 > emotions.emotionBase.length-1 ? base = 0 : base++;
                setEmotion(base);
                intens = 0;
                setIntensityEmotion(intens);
            }
            else{
                intens++;
                setIntensityEmotion(intens);
            }
        }
        intens%2 == 0 ? assoc = intens/2 : assoc = (intens - 1)/2;
        setAssociatedEmotion(assoc);
    } 
    const turnLeft = () => {
        let base = emotion;
        let assoc = associatedEmotion;
        let intens = intensityEmotion;
        if (angle > -85){
            setAngle(angle - 5);
            if (intens - 1 < 0){
                base - 1 < 0 ? base = emotions.emotionBase.length-1 : base--;
                setEmotion(base);
                intens = emotions.intensites[base].length-1;
                setIntensityEmotion(intens);
            }
            else{
                intens--;
                setIntensityEmotion(intens);
            }
        }
        intens%2 == 0 ? assoc = intens/2 : assoc = (intens - 1)/2;
        setAssociatedEmotion(assoc);
    }
    const leftChoice = () => {
        let base = emotion;
        let assoc = associatedEmotion;
        let intens = intensityEmotion;
        if (angle !=95){
            setTriangleActivated('right');
            for (let i = 0; i < 35; i++){
                if (intens - 1 < 0){
                    intens = emotions.intensites[base].length-1;
                    setIntensityEmotion(intens);
                    base - 1 < 0  ? (base = emotions.emotionBase.length-1, setEmotion(base)) : (base--, setEmotion(base));
                }
                else{
                    intens--;
                    setIntensityEmotion(intens);
                }
                intens%2 == 0 ? assoc = intens/2 : assoc = (intens-1)/2;
                setAssociatedEmotion(assoc);
                console.log(emotions.intensites[base].length, base, assoc, intens);
            }
        }
    }
    const rightChoice = ()=> {
        let base = emotion;
        let assoc = associatedEmotion;
        let intens = intensityEmotion;
        if (angle !=-85){
            setTriangleActivated('left');
            for (let i = 0; i < 35; i++){
                console.log('i:', i);
                if (intens + 1 > emotions.intensites[base].length-1){
                    intens = 0;
                    setIntensityEmotion(intens);
                    base + 1 > emotions.emotionBase.length-1 ? (base = 0, setEmotion(base)) : (base++, setEmotion(base));
                }
                else{
                    intens++;
                    setIntensityEmotion(intens);
                }
                intens%2 == 0 ? assoc = intens/2 : assoc = (intens-1)/2;
                setAssociatedEmotion(assoc);
            }
        }
    }
    let Navigate = useNavigate();    
    return (
        <div id = "EmotionsWheel" className = "page">
            <div id = "EmotionsWheel__title">
                <h1 id = "EmotionsWheel__title--primary">Roue des émotions</h1>
                <h3 id = "EmotionsWheel__title--secondary">Robert Plutchik</h3>
                <br />
                <ol id = "EmotionsWheel__title--instructions">
                    <li>Identifie ton émotion de base:<span> </span> 
                        <EmotionBase couleur = {emotions.couleurBase[emotion]}><b>{emotions.emotionBase[emotion]}</b></EmotionBase>
                    </li>
                    <li>Explore les émotions associées: <span> </span>
                        <EmotionAssociated couleur = {emotions.couleursAssociees[emotion]}><b>{emotions.emotionsAssociees[emotion][associatedEmotion]}</b></EmotionAssociated>
                    </li>
                    <li>Analyse les intensités: <span> </span>
                        <EmotionIntensity couleur = {emotions.couleursIntensite[emotion]}><b>{emotions.intensites[emotion][intensityEmotion]}</b></EmotionIntensity></li>
                    <li>Besoin associé: <span></span>
                        <NeedAssociated couleur = {emotions.couleurBase[emotion]}><b>{emotions.besoinAssocie[emotion]}</b></NeedAssociated></li>
                    <li>Réfléchis aux déclencheurs</li>
                    <li>Apprivoise tes émotions</li>
                </ol>
                <br />
                <p>Clique sur la flèche de sélection pour la passer de part et d&apos;autre de la roue</p>
            </div>
            <div id = "EmotionsWheel__imageContainer" className = "imageContainer">
                <RightArrow id = "EmotionsWheel__image--rightArrowContainer" angle = {angle} triangle = {triangleActivated}>
                    <img id = "EmotionsWheel__image--rightArrow"src = {rightArrow} alt="Tourner à droite" />
                    <img id = "EmotionsWheel__image--rightArrowHover" src = {rightArrowHover} alt="Tourner à droite"
                            onClick = {turnRight} />
                </RightArrow>
                <div id = "EmotionsWheel__image--trianglesAndWheel">
                    <LeftTriangle id = "EmotionsWheel__image--triangleLeft" src= {triangle} alt="triangle" 
                                triangleActivated = {triangleActivated} angle = {angle}
                                onClick = {leftChoice}/>
                    <Wheel id = "EmotionsWheel__image--wheel" src = {wheel} alt = "Roue des émotions" 
                        angle = {angle}/>
                    <RightTriangle id = "EmotionsWheel__image--triangleRight" src= {triangle} alt="triangle" 
                                triangleActivated = {triangleActivated} angle = {angle}
                                onClick = {rightChoice}/>
                </div>
                <LeftArrow id = "EmotionsWheel__image--leftArrowContainer" angle = {angle} triangle = {triangleActivated}>
                    <img id = "EmotionsWheel__image--leftArrow"src = {leftArrow} alt="Tourner à gauche" />
                    <img id = "EmotionsWheel__image--leftArrowHover"src = {leftArrowHover} alt="Tourner à gauche"
                        onClick = {turnLeft} />
                </LeftArrow>
            </div>
           
            <div id = "EmotionsWheel__arrowTurnLeftContainer" className = "returnIconContainer"> 
                <i id = "EmotionsWheel__arrowTurnLeftIcon" 
                    className = "fa-solid fa-rotate-left returnIcon"
                    onClick = {() => Navigate("/Menu")}></i>
            </div>
        </div>
    )
}
export default EmotionsWheel;