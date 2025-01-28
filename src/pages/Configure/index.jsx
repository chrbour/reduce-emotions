import {useNavigate} from "react-router-dom";
import {useState} from 'react';
import AddItem from '../../components/AddItem';
import styled from "styled-components";
import greenCloud from '../../assets/svg/Nuage_vert.svg';
import yellowCloud from '../../assets/svg/Nuage_jaune.svg';
import redCloud from '../../assets/svg/Nuage_rouge.svg';
import brownCloud from '../../assets/svg/Nuage_marron_avec_pieds_noirs.svg';
import blackCloud from '../../assets/svg/Nuage_noir_avec_pieds_noirs.svg';
import ListOfActions from "../../components/ListOfActions";



const Container = styled.div`
    border-color: ${({color})=> color};
    color: ${({color})=> color};
`
let choices = localStorage.getItem("emotions");
console.log("choices", choices);

const Configure = () =>{
    let Navigate = useNavigate();
    const [addItemGreen, setAddItemGreen] = useState("no");
    const [addItemYellow, setAddItemYellow] = useState("no");
    const feeling = {
            noEmotion : {
                icon: "",
                color: "rgb(202, 202, 202)",
                title : "",
                action: "",
            },
            greenEmotion:{
                icon: greenCloud,
                color: "#5FCE84",
                title: "Je me sens bien",
                action: ["Ecoute de la musique", "Joue avec ta famille/tes amis", "Parle avec des amis ou ta famille",
                    "Sors prendre l'air", "Obtiens ou fais un câlin", "Fais une activité que tu aimes",
                    "Fais des étirements", "Bouge ou fais du sport", "Continue d'écouter", "Utilise des mots gentils et positifs",
                    "Ecris tes succès", "Aide quelqu'un d'autre", "Souris et pratique la gratitude",
                    "Avance vers tes objectifs", "Range/Mets de l'ordre dans tes affaires"]
            },
            yellowEmotion: {
                icon:  yellowCloud,
                color: "#EAB801",
                title: "Je suis nerveux, triste",
                action: ["Ecoute de la musique", "Parle avec des amis ou ta famille", "Sors prendre l'air", "Obtiens ou fais un câlin",
                    "Fais une activité que tu aimes", "Fais des étirements", "Bouge ou fais du sport", "Continue d'écouter",
                    "Utilise des mots gentils et positifs", "Ecris tes succès", "Aide quelqu'un d'autre", 
                    "Respire profondément", "Fais une pause", "Détends-toi et réessaye", "Avance vers tes objectifs", 
                    "Pense à un endroit paisible", "Utilise un discours intérieur positif", "Tends et détends tes muscles", 
                    "Isole-toi", "Arrête-toi et sors", "Pratique des techniques d'ancrage", "Appelle/Parle à quelqu'un", 
                    "Pousse les murs", "Serre un fruit glacé dans tes mains", "Evite les lieux à risque", 
                    "Enroule-toi dans une couverture/plaid", "Tapping", "Range/Mets de l'ordre dans tes affaires"]
            },
            redEmotion: {
                icon: redCloud,
                color: "#D40101",
                title: "Je suis fâché, angoissé", 
                action: ["Ecoute de la musique", "Parle avec des amis ou ta famille", "Sors prendre l'air", "Obtiens ou fais un câlin",
                    "Fais une activité que tu aimes", "Fais des étirements", "Bouge ou fais du sport", "Ecris tes succès",
                    "Respire profondément", "Fais une pause", "Détends-toi et réessaye", "Fais une sieste",
                    "Pense à un endroit paisible", "Utilise un discours intérieur positif", "Tends et détends tes muscles", 
                    "Arrête-toi et sors", "Pratique des techniques d'ancrage", "Pousse les murs",
                    "Serre un fruit glacé dans tes mains", "Evite les lieux à risque", "Frappe un oreiller/sac de frappe",
                    "Enroule-toi dans une couverture/plaid", "Tapping", "Appelle/Parle à quelqu'un", "Demande de l'aide",
                    "Range/Mets de l'ordre dans tes affaires"],
            },
            brownEmotion: {
                icon: brownCloud,
                color: "#791A1A",
                title: "Je suis furieux, agacé", 
                action: ["Parle avec des amis ou ta famille", "Obtiens ou fais un câlin", "Fais une activité que tu aimes", "Fais des étirements", 
                    "Respire profondément", "Fais une sieste", "Pense à un endroit paisible", "Utilise un discours intérieur positif", "Tends et détends tes muscles", 
                    "Arrête-toi et sors", "Pratique des techniques d'ancrage", "Pousse les murs",
                    "Serre un fruit glacé dans tes mains", "Evite les lieux à risque", "Frappe un oreiller/sac de frappe",
                    "Enroule-toi dans une couverture/plaid", "Tapping", "Appelle/Parle à quelqu'un", "Demande de l'aide",
                    "Prends ton traitement prescrit en cas de crise"]
            },
            blackEmotion: {
                icon: blackCloud,
                color: "#000000",
                title: "J'ai des idées noires",
                action: ["Obtiens ou fais un câlin", "Fais une sieste", "Pousse les murs", "Serre un fruit glacé dans tes mains", "Evite les lieux à risque", "Frappe un oreiller/sac de frappe",
                        "Appelle/Parle à quelqu'un", "Demande de l'aide",
                        "Prends ton traitement prescrit en cas de crise", "Appelle les urgences"]
            }
        };
        
    return(
        <div id = "configure" >
            <h1 id = "configure__title">Paramétrage du thermomètre</h1>
            <Container color = {feeling.greenEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {feeling.greenEmotion.icon} alt="green emotion" />
                    <h2 className = "configure__imgContainer--text" >
                        {feeling.greenEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions  className = "configure__listOfActions" emotion = {feeling.greenEmotion} check = {1} />
                <i className="fa-solid fa-circle-plus" onClick = {() => setAddItemGreen("entering")}></i>
                {addItemGreen != "no" ? 
                    <AddItem act = {addItemGreen} setAct = {setAddItemGreen}/> 
                    : null}
                
            </Container>
            <Container color = {feeling.yellowEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {feeling.yellowEmotion.icon} alt="yellow emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {feeling.yellowEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} emotion = {feeling.yellowEmotion}/>
                <i className="fa-solid fa-circle-plus" onClick = {() => setAddItemYellow("entering")}></i>
                {addItemYellow != "no" ? 
                    <AddItem act = {addItemYellow} setAct = {setAddItemYellow}/> 
                    : null}
            </Container>
            <Container color = {feeling.redEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {feeling.redEmotion.icon} alt="red emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {feeling.redEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} emotion = {feeling.redEmotion}/>
                <i className="fa-solid fa-circle-plus" ></i>
            </Container>
            <Container color = {feeling.brownEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {feeling.brownEmotion.icon} alt="brown emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {feeling.brownEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} emotion = {feeling.brownEmotion}/>
                <i className="fa-solid fa-circle-plus" ></i>
            </Container>
            <Container color = {feeling.blackEmotion.color}className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {feeling.blackEmotion.icon} alt="" />
                    <h2 className = "configure__imgContainer--text">
                        {feeling.blackEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} emotion = {feeling.blackEmotion}/>
                <i className="fa-solid fa-circle-plus" ></i>
            </Container>
            <div id = "Anchor__arrowTurnLeftContainer" className = "returnIconContainer"> 
                    <i id = "Anchor__arrowTurnLeftIcon" 
                        className = "fa-solid fa-rotate-left returnIcon"
                        onClick = {() => Navigate("/Thermometer")}></i>
                </div>
        </div>
    )
}
    

export default Configure;