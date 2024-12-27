
import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import thermometer from "../../assets/svg/Thermomètre_Humeurs.svg";
import triangleWhite from '../../assets/svg/triangleWhite.svg';
import triangleRed from '../../assets/svg/triangleRed.svg';
import greenCloud from '../../assets/svg/Nuage_vert.svg';
import yellowCloud from '../../assets/svg/Nuage_jaune.svg';
import redCloud from '../../assets/svg/Nuage_rouge.svg';
import brownCloud from '../../assets/svg/Nuage_marron_avec_pieds_noirs.svg';
import blackCloud from '../../assets/svg/Nuage_noir_avec_pieds_noirs.svg';
import music from '../../assets/images/woman-earphones_1280.webp';
import play from '../../assets/images/board-game_1280.webp';
import friends from '../../assets/images/holding-hands_1280.webp';
import goOut from '../../assets/images/sky_1280.webp';
import cuddly from '../../assets/images/romantic_1280.webp';
import draw from '../../assets/images/draw_1280.webp';
import stretching from '../../assets/images/holding-hands_1280.webp';
import sport from '../../assets/images/sport_1280.webp';
import listen from '../../assets/images/listening_1280.webp';
import positiveWords from '../../assets/images/time-for-a-change_1280.webp';
import success from '../../assets/images/pen_1280.webp';
import reachOut from '../../assets/images/reach-out_1280.webp';
import deepBreath from '../../assets/images/meditation_1280.webp';
import pause from '../../assets/images/coffee-break_1280.webp';
import tryAgain from '../../assets/images/not-impossible_1280.webp';
import nap from '../../assets/images/woman-sleeping_1280.webp';
import smile from '../../assets/images/namaste_1280.webp';
import goals from '../../assets/images/pedestrian_1280.webp';
import peaceFullPlace from '../../assets/images/seagull_1280.webp';
import innerSpeech from '../../assets/images/thumbs-up_1280.webp';
import muscles from '../../assets/images/muscles_1280.webp';
import breakup from '../../assets/images/breakup_1280.webp';
import stop from '../../assets/images/stop-705669_1280.webp';
import shipping from '../../assets/images/shipping_1280.webp';
import push from '../../assets/images/tyre-push_1280.webp';
import fruit from '../../assets/images/lemon_1280.webp';
import keepOut from '../../assets/images/keep-out_1280.webp';
import hitPillow from '../../assets/images/punch_1280.webp';
import blanket from '../../assets/images/cold-blanket_1280.webp';
import tapping from '../../assets/images/braille_1280.webp';
import call from '../../assets/images/old-woman-phone_1280.webp';
import help from '../../assets/images/help_1280.webp';
import range from '../../assets/images/glasses_1280.webp';
import pills from '../../assets/images/stethoscope_1280.webp';
import emergencies from '../../assets/images/ambulance_1280.webp';

const Frame = styled.div`
    border: 25px solid;
    border-color: ${({color}) => color};
    background-color: ${({color}) => color === 'rgb(202, 202, 202)'? color : '#FFFFFF'};
    color: ${({color}) => color};
`
function Thermometer() {
    let Navigate = useNavigate();
    const Emotion = ({emotion}) => {
        setContainerColor(feeling[emotion].color);
        console.log(emotion,feeling[emotion].color);
        return(
            <>
                {emotion != 'noEmotion' ? 
                    <>
                    <div>
                        <img src = {feeling[emotion].icon} alt = "Icône émotion" id = 'thermometer__frameEmotion'/>
                        <h1>{feeling[emotion].title}</h1>
                    </div>
                    <ListOfActions emotion = {emotion}/>
                    </>
                    : null}
            </>
        )
    }
    
    Emotion.propTypes = {
        emotion: PropTypes.string
    }
    const ListOfActions = ({emotion}) => {
        let picture = "";
        const actions = preferences[emotion].action.map((e, index) => {
            feeling.image.map((i, id) => {
                e === i? (picture = feeling.image[id-1],console.log(picture)) : null
                return picture
            })
            return(
                <div key = {index} style = {{display: 'flex', margin: '5px'}}>
                    <img src={picture} alt="actions" style = {{height:'100px', width: 'auto'}}/>
                    <p  style = {{color: 'black', padding: '0 20px'}}>{e}</p>
                </div>
            )
        }
        );
        return <div>{actions}</div>
    }
    ListOfActions.propTypes = {
        emotion: PropTypes.string
    }
    
    const feeling = {
        noEmotion : {
            icon: '',
            color: 'rgb(202, 202, 202)',
            title : '',
            action: '',
        },
        greenEmotion:{
            icon: greenCloud,
            color: '#5FCE84',
            title: 'Je me sens bien',
            action: ['Ecoute de la musique', 'Joue avec ta famille/tes amis', 'Parle avec des amis ou ta famille',
                'Sors prendre l&apos;air', 'Obtiens ou fais un câlin', 'Fais une activité que tu aimes',
                'Fais des étirements', 'Bouge ou fais du sport', 'Continue d&apos;écouter', 'Utilise des mots gentils et positifs',
                'Ecris tes succès', 'Aide quelqu&apos;un d&apos;autre', 'Souris et pratique la gratitude',
                'Fais des pas vers tes objectifs', 'Range/Mets de l&apos;ordre dans tes affaires']
        },
        yellowEmotion: {
            icon:  yellowCloud,
            color: '#EAB801',
            title: 'Je suis nerveux, triste',
            action: ['Ecoute de la musique', 'Parle avec des amis ou ta famille', 'Sors prendre l&apos;air', 'Obtiens ou fais un câlin',
                'Fais une activité que tu aimes', 'Fais des étirements', 'Bouge ou fais du sport', 'Continue d&apos;écouter',
                'Utilise des mots gentils et positifs', 'Ecris tes succès', 'Aide quelqu&apos;un d&apos;autre', 
                'Respire profondément', 'Fais une pause', 'Détends-toi et réessaye', 'Fais des pas vers tes objectifs', 
                'Pense à un endroit paisible', 'Utilise un discours intérieur positif', 'Tends et détends tes muscles', 
                'Isole-toi', 'Arrête-toi et sors', 'Pratique des techniques d&apos;ancrage', 'Appelle/Parle à quelqu&apos;un', 
                'Pousse les murs', 'Serre un fruit glacé dans tes mains', 'Evite les lieux à risque', 
                'Enroule-toi dans une couverture/plaid', 'Tapping', 'Range/Mets de l&apos;ordre dans tes affaires']
        },
        redEmotion: {
            icon: redCloud,
            color: '#D40101',
            title: 'Je suis fâché, angoissé', 
            action: ['Ecoute de la musique', 'Parle avec des amis ou ta famille', 'Sors prendre l&apos;air', 'Obtiens ou fais un câlin',
                'Fais une activité que tu aimes', 'Fais des étirements', 'Bouge ou fais du sport', 'Ecris tes succès',
                'Respire profondément', 'Fais une pause', 'Détends-toi et réessaye', 'Fais une sieste',
                'Pense à un endroit paisible', 'Utilise un discours intérieur positif', 'Tends et détends tes muscles', 
                'Arrête-toi et sors', 'Pratique des techniques d&apos;ancrage', 'Pousse les murs',
                'Serre un fruit glacé dans tes mains', 'Evite les lieux à risque', 'Frappe un oreiller/sac de frappe',
                'Enroule-toi dans une couverture/plaid', 'Tapping', 'Appelle/Parle à quelqu&apos;un', 'Demande de l&apos;aide',
                'Range/Mets de l&apos;ordre dans tes affaires'],
        },
        brownEmotion: {
            icon: brownCloud,
            color: '#791A1A',
            title: 'Je suis furieux, agacé', 
            action: ['Parle avec des amis ou ta famille', 'Obtiens ou fais un câlin', 'Fais une activité que tu aimes', 'Fais des étirements', 
                'Respire profondément', 'Fais une sieste', 'Pense à un endroit paisible', 'Utilise un discours intérieur positif', 'Tends et détends tes muscles', 
                'Arrête-toi et sors', 'Pratique des techniques d&apos;ancrage', 'Pousse les murs',
                'Serre un fruit glacé dans tes mains', 'Evite les lieux à risque', 'Frappe un oreiller/sac de frappe',
                'Enroule-toi dans une couverture/plaid', 'Tapping', 'Appelle/Parle à quelqu&apos;un', 'Demande de l&apos;aide',
                'Prends ton traitement prescrit en cas de crise']
        },
        blackEmotion: {
             icon: blackCloud,
        color: '#000000',
        title: 'J&apos;ai des idées noires',
        action: ['Obtiens ou fais un câlin', 'Fais une sieste', 'Pousse les murs', 'Serre un fruit glacé dans tes mains', 'Evite les lieux à risque', 'Frappe un oreiller/sac de frappe',
                'Appelle/Parle à quelqu&apos;un', 'Demande de l&apos;aide',
                'Prends ton traitement prescrit en cas de crise', 'Appelle les urgences']
        },
        image: [music, 'Ecoute de la musique', 
                play, 'Joue avec ta famille/tes amis',
                friends, 'Parle avec des amis ou ta famille',
                goOut, 'Sors prendre l&apos;air',
                cuddly, 'Obtiens ou fais un câlin', 
                draw, 'Fais une activité que tu aimes',
                stretching, 'Fais des étirements',
                sport, 'Bouge ou fais du sport', 
                listen, 'Continue d&apos;écouter',
                positiveWords, 'Utilise des mots gentils et positifs',
                success, 'Ecris tes succès',
                reachOut, 'Aide quelqu&apos;un d&apos;autre',
                deepBreath, 'Respire profondément',
                pause, 'Fais une pause',
                tryAgain, 'Détends-toi et réessaye',
                nap, 'Fais une sieste',
                smile, 'Souris et pratique la gratitude',
                goals, 'Fais des pas vers tes objectifs',
                peaceFullPlace, 'Pense à un endroit paisible', 
                innerSpeech, 'Utilise un discours intérieur positif',
                muscles, 'Tends et détends tes muscles',
                breakup, 'Isole-toi',
                stop, 'Arrête-toi et sors',
                shipping, 'Pratique des techniques d&apos;ancrage',
                push, 'Pousse les murs',
                fruit, 'Serre un fruit glacé dans tes mains',
                keepOut, 'Evite les lieux à risque',
                hitPillow, 'Frappe un oreiller/sac de frappe',
                blanket, 'Enroule-toi dans une couverture/plaid',
                tapping, 'Tapping',
                call, 'Appelle/Parle à quelqu&apos;un',
                help, 'Demande de l&apos;aide',
                range, 'Range/Mets de l&apos;ordre dans tes affaires',
                pills, 'Prends ton traitement prescrit en cas de crise',
                emergencies,  'Appelle les urgences',
            ]
    }
    const preferencesList = "";
    let preferences = {};
    const defaultList = {
        greenEmotion: {
            action: ['Ecoute de la musique', 'Bouge ou fais du sport', 'Souris et pratique la gratitude',
            'Fais des pas vers tes objectifs'],
        },
        yellowEmotion: {
            action: ['Ecoute de la musique', 'Bouge ou fais du sport', 'Pense à un endroit paisible', 
            'Détends-toi et réessaye'],
        },
        redEmotion: {
            action: ['Sors prendre l&apos;air', 'Bouge ou fais du sport', 'Respire profondément',
                'Pense à un endroit paisible', 'Pratique des techniques d&apos;ancrage'],
            },
        brownEmotion: {
            action: ['Respire profondément', 'Arrête-toi et sors', 'Serre un fruit glacé dans tes mains',
                'Frappe un oreiller/sac de frappe'],
            },
        blackEmotion: {
            action: ['Demande de l&apos;aide', 'Prends ton traitement prescrit en cas de crise', 'Appelle les urgences'],
            },
        }
    const [feelEmotion, setFeelEmotion] = useState('noEmotion');
    const [containerColor, setContainerColor] = useState(feeling[{feelEmotion}.color]);
    preferencesList === "" ? preferences = defaultList : preferences = preferencesList;
    return (
        <div id = "thermometer">
            <div id = "thermometer__titleContainer">
                <h1 id = "thermometer__titleContainer--primary">Thermomètre des émotions</h1>
                <i className ="fa-solid fa-gear"></i>
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
                        <Emotion emotion = {feelEmotion} preferences = {preferences}/>
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