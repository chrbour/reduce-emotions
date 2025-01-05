import {useNavigate} from "react-router-dom";
import greenCloud from '../../assets/svg/Nuage_vert.svg';
import yellowCloud from '../../assets/svg/Nuage_jaune.svg';
import redCloud from '../../assets/svg/Nuage_rouge.svg';
import brownCloud from '../../assets/svg/Nuage_marron_avec_pieds_noirs.svg';
import blackCloud from '../../assets/svg/Nuage_noir_avec_pieds_noirs.svg';

const Configure = () =>{
    let Navigate = useNavigate();
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
                    "Fais des pas vers tes objectifs", "Range/Mets de l'ordre dans tes affaires"]
            },
            yellowEmotion: {
                icon:  yellowCloud,
                color: "#EAB801",
                title: "Je suis nerveux, triste",
                action: ["Ecoute de la musique", "Parle avec des amis ou ta famille", "Sors prendre l'air", "Obtiens ou fais un câlin",
                    "Fais une activité que tu aimes", "Fais des étirements", "Bouge ou fais du sport", "Continue d'écouter",
                    "Utilise des mots gentils et positifs", "Ecris tes succès", "Aide quelqu'un d'autre", 
                    "Respire profondément", "Fais une pause", "Détends-toi et réessaye", "Fais des pas vers tes objectifs", 
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
        console.log(feeling);
    return(
        <>
            <h1>Configuration</h1>
            <div id = "Anchor__arrowTurnLeftContainer" className = "returnIconContainer"> 
                    <i id = "Anchor__arrowTurnLeftIcon" 
                        className = "fa-solid fa-rotate-left returnIcon"
                        onClick = {() => Navigate("/Menu")}></i>
                </div>
        </>
    )
}
    

export default Configure;