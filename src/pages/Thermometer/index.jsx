
import {useState, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {EmotionsContext} from '../../utils/context/Context';
import styled from 'styled-components';
import Emotion from '../../components/Emotion';
import thermometer from "../../assets/svg/Thermomètre_Humeurs.svg";
import triangleWhite from '../../assets/svg/triangleWhite.svg';
import triangleRed from '../../assets/svg/triangleRed.svg';

const Frame = styled.div`
    border: 25px solid;
    border-color: ${({color}) => color};
    background-color: ${({color}) => color === 'rgb(202, 202, 202)'? color : '#FFFFFF'};
    color: ${({color}) => color};
`
function Thermometer() {
    let Navigate = useNavigate();
    const {defaultEmotions, emotionsWithoutAction} = useContext(EmotionsContext);
    const objLinea = localStorage.getItem("emotions");
    let preferencesList;
    objLinea != null? preferencesList = JSON.parse(objLinea) : preferencesList = "";
    let preferences = {};
    const [feelEmotion, setFeelEmotion] = useState('noEmotion');
    const [containerColor, setContainerColor] = useState(emotionsWithoutAction[feelEmotion].color);
    preferencesList === "" ? preferences = defaultEmotions : preferences = preferencesList;
    emotionsWithoutAction.greenEmotion.action = preferences.greenEmotion.action;
    emotionsWithoutAction.greenEmotion.option = preferences.greenEmotion.option;
    emotionsWithoutAction.yellowEmotion.action = preferences.yellowEmotion.action;
    emotionsWithoutAction.yellowEmotion.option = preferences.yellowEmotion.option;
    emotionsWithoutAction.redEmotion.action = preferences.redEmotion.action;
    emotionsWithoutAction.redEmotion.option = preferences.redEmotion.option;
    emotionsWithoutAction.brownEmotion.action = preferences.brownEmotion.action;
    emotionsWithoutAction.brownEmotion.option = preferences.brownEmotion.option;
    emotionsWithoutAction.blackEmotion.action = preferences.blackEmotion.action;
    emotionsWithoutAction.blackEmotion.option = preferences.blackEmotion.option;
    
    const actionTriangle = (e) => {
        setFeelEmotion(e);
        setContainerColor(emotionsWithoutAction[e].color)
    }
    return (
        <div id = "thermometer">
            <div id = "thermometer__titleContainer">
                <h1 id = "thermometer__titleContainer--primary">Thermomètre des émotions</h1>
                <div id = "thermometer__titleContainer--secondary">
                    <div id = "thermometer__titleContainer--bubble">Paramétrage des préférences</div>
                    <i className ="fa-solid fa-gear" onClick = {() => Navigate("/Configure")}></i>  
                </div>
            </div>
        
            <div id = "thermometer__imageContainer">
                <div id = "thermometer__imageContainer--image" >
                    <img src = {thermometer} alt="Thermomètre des émotions" />
                    <div id = "thermometer__imageContainer--triangle">
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {actionTriangle('blackEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {actionTriangle('brownEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {actionTriangle('redEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {actionTriangle('yellowEmotion')}}/>
                        </div>
                        <div className = 'thermometer__triangle'>
                            <img src = {triangleWhite} alt="Selecteur" className = 'thermometer__triangle--white'/>
                            <img src = {triangleRed} alt="Selecteur" className = 'thermometer__triangle--red'
                                    onClick = {() => {actionTriangle('greenEmotion')}}/>
                        </div>
                    </div>
                    <Frame id = "thermometer__imageContainer--rectangle" color = {containerColor}>
                        <Emotion emotion = {emotionsWithoutAction[feelEmotion]} />
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