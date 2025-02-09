import {useNavigate} from "react-router-dom";
import {useState} from 'react';
import AddItem from '../../components/AddItem';
import styled from "styled-components";
import greenCloud from '../../assets/svg/Nuage_vert.svg';
import yellowCloud from '../../assets/svg/Nuage_jaune.svg';
import redCloud from '../../assets/svg/Nuage_rouge.svg';
import brownCloud from '../../assets/svg/Nuage_marron_avec_pieds_noirs.svg';
import blackCloud from '../../assets/svg/Nuage_noir_avec_pieds_noirs.svg';
import ListOfActions from "../../components/ListOfActionsParams";



const Container = styled.div`
    border-color: ${({color})=> color};
    color: ${({color})=> color};
`

const Configure = () =>{
    let Navigate = useNavigate();
    const [addItemGreen, setAddItemGreen] = useState("no");
    const [addItemYellow, setAddItemYellow] = useState("no");
    const [addItemRed, setAddItemRed] = useState("no");
    const [addItemBrown, setAddItemBrown] = useState("no");
    const [addItemBlack, setAddItemBlack] = useState("no");
    let allEmotions = {
            noEmotion : {
                name: "",
                icon: "",
                color: "rgb(202, 202, 202)",
                title : "",
                action: "",
            },
            greenEmotion:{
                name: "greenEmotion",
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
                name: "yellowEmotion",
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
                name: "redEmotion",
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
                name: "brownEmotion",
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
                name: "blackEmotion",
                icon: blackCloud,
                color: "#000000",
                title: "J'ai des idées noires",
                action: ["Obtiens ou fais un câlin", "Fais une sieste", "Pousse les murs", "Serre un fruit glacé dans tes mains", "Evite les lieux à risque", "Frappe un oreiller/sac de frappe",
                        "Appelle/Parle à quelqu'un", "Demande de l'aide",
                        "Prends ton traitement prescrit en cas de crise", "Appelle les urgences"]
            }
        };
        let defaultEmotions = {
            noEmotion : {
                name: "",
                icon: "",
                color: "rgb(202, 202, 202)",
                title : "",
                action: "",
            },
            greenEmotion:{
                name: "greenEmotion",
                icon: greenCloud,
                color: "#5FCE84",
                title: "Je me sens bien",
                action: ["Ecoute de la musique", "Bouge ou fais du sport", "Souris et pratique la gratitude"]
            },
            yellowEmotion: {
                name: "yellowEmotion",
                icon:  yellowCloud,
                color: "#EAB801",
                title: "Je suis nerveux, triste",
                action: ["Ecoute de la musique", "Bouge ou fais du sport", "Détends-toi et réessaye",
                    "Pense à un endroit paisible"]
            },
            redEmotion: {
                name: "redEmotion",
                icon: redCloud,
                color: "#D40101",
                title: "Je suis fâché, angoissé", 
                action: ["Sors prendre l'air", "Obtiens ou fais un câlin", "Bouge ou fais du sport", 
                    "Respire profondément", "Pense à un endroit paisible", "Pratique des techniques d'ancrage"],
            },
            brownEmotion: {
                name: "brownEmotion",
                icon: brownCloud,
                color: "#791A1A",
                title: "Je suis furieux, agacé", 
                action: ["Respire profondément", "Arrête-toi et sors", "Serre un fruit glacé dans tes mains", "Frappe un oreiller/sac de frappe"]
            },
            blackEmotion: {
                name: "blackEmotion",
                icon: blackCloud,
                color: "#000000",
                title: "J'ai des idées noires",
                action: ["Demande de l'aide", "Prends ton traitement prescrit en cas de crise", "Appelle les urgences"]
            }
        };
        
        let selection = defaultEmotions;
        let option;
        let objLinea = localStorage.getItem("emotions");
    
        if (objLinea){
            let objJson = JSON.parse(objLinea); 
            selection = objJson;
            if (objJson.option != null){
                option = objJson.option;
        }
        }
    return(
        <div id = "configure" >
            <h1 id = "configure__title">Paramétrage du thermomètre</h1>
            <Container color = {allEmotions.greenEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.greenEmotion.icon} alt="green emotion" />
                    <h2 className = "configure__imgContainer--text" >
                        {allEmotions.greenEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions  className = "configure__listOfActions" display = {allEmotions.greenEmotion} check = {1}  selection= {selection} option = {option} />
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemYellow == "entering" || addItemRed == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemGreen("entering")}>
                </i>
                {addItemGreen != "no"  ? 
                    <AddItem act = {addItemGreen} setAct = {setAddItemGreen} color = {allEmotions.greenEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.yellowEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.yellowEmotion.icon} alt="yellow emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.yellowEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} display = {allEmotions.yellowEmotion}  selection= {selection} option = {option}/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemRed == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemYellow("entering")}>
                </i>
                {addItemYellow != "no"  ? 
                    <AddItem act = {addItemYellow} setAct = {setAddItemYellow} color = {allEmotions.yellowEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.redEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.redEmotion.icon} alt="red emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.redEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} display = {allEmotions.redEmotion}  selection= {selection} option = {option}/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemYellow == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemRed("entering")}>
                </i>
                {addItemRed != "no"  ? 
                    <AddItem act = {addItemRed} setAct = {setAddItemRed} color = {allEmotions.redEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.brownEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.brownEmotion.icon} alt="brown emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.brownEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} display = {allEmotions.brownEmotion}  selection= {selection} option = {option}/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemRed == "entering" || addItemYellow == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemBrown("entering")}>
                </i>
                {addItemBrown != "no"  ? 
                    <AddItem act = {addItemBrown} setAct = {setAddItemBrown} color = {allEmotions.brownEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.blackEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.blackEmotion.icon} alt="" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.blackEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActions className = "configure__listOfActions" check = {1} display = {allEmotions.blackEmotion}  selection= {selection} option = {option}/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemRed == "entering" || addItemYellow == "entering" || addItemBrown == "entering")? 
                    null :
                    setAddItemBlack("entering")}>
                </i>
                {addItemBlack != "no"  ? 
                    <AddItem act = {addItemBlack} setAct = {setAddItemBlack} color = {allEmotions.blackEmotion.color}/> 
                    : null}
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