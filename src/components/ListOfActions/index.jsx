import PropTypes from "prop-types";
import styled from "styled-components";
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

const DisplayListOfActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 50vw;
    height: 100%;
`
const ContainerListOfActions = styled.div`
        grid-template: ${({check}) => check === 0 ? '100% / 150px 300px' : '100% / 50px 100px 300px'
        };
        border: 1px solid #000000;
        width: ${({check}) => check ===0 ? '500px': '450px'}; 
        display: grid;
        margin: 1px;
    `  
    const ContainerImgListOfActions = styled.div`
        border-right: 1px solid #000000;
        display: flex;
        align-items: center;
    `
    const ImgListOfActions = styled.img`
        height: ${({check}) => 
            check === 0? '100px !important' : '50px !important'};
        width: ${({check}) => 
            check === 0 ? '148px' : '74px'};
        margin: auto;
    `
    const TextListOfActions = styled.div`
        color: #000000; 
        margin: auto 20px;
        font-size: ${({check}) => check === 0 ? '20px' : '12px'};
    `
const ListOfActions = ({emotion, check}) => {
    const image = [music, "Ecoute de la musique", 
                    play, "Joue avec ta famille/tes amis",
                    friends, "Parle avec des amis ou ta famille",
                    goOut, "Sors prendre l'air",
                    cuddly, "Obtiens ou fais un câlin", 
                    draw, "Fais une activité que tu aimes",
                    stretching, "Fais des étirements",
                    sport, "Bouge ou fais du sport", 
                    listen, "Continue d'écouter",
                    positiveWords, "Utilise des mots gentils et positifs",
                    success, "Ecris tes succès",
                    reachOut, "Aide quelqu'un d'autre",
                    deepBreath, "Respire profondément",
                    pause, "Fais une pause",
                    tryAgain, "Détends-toi et réessaye",
                    nap, "Fais une sieste",
                    smile, "Souris et pratique la gratitude",
                    goals, "Avance vers tes objectifs",
                    peaceFullPlace, "Pense à un endroit paisible", 
                    innerSpeech, "Utilise un discours intérieur positif",
                    muscles, "Tends et détends tes muscles",
                    breakup, "Isole-toi",
                    stop, "Arrête-toi et sors",
                    shipping, "Pratique des techniques d'ancrage",
                    push, "Pousse les murs",
                    fruit, "Serre un fruit glacé dans tes mains",
                    keepOut, "Evite les lieux à risque",
                    hitPillow, "Frappe un oreiller/sac de frappe",
                    blanket, "Enroule-toi dans une couverture/plaid",
                    tapping, "Tapping",
                    call, "Appelle/Parle à quelqu'un",
                    help, "Demande de l'aide",
                    range, "Range/Mets de l'ordre dans tes affaires",
                    pills, "Prends ton traitement prescrit en cas de crise",
                    emergencies,  "Appelle les urgences",
                ];
    

    let picture;
    let actions = image.map((i, id) => {
        for (let e of emotion.action){
            if(e === i){
                picture = image[id-1];
                return (
                    <ContainerListOfActions id = "containerListOfActions" key = {i} check= {check}>
                        {check === 0? null : <input type = "checkbox" />}
                        <ContainerImgListOfActions id = "containerListOfActions__contImg" check= {check}>
                            <ImgListOfActions src={picture} alt = "actions" check= {check}/>
                        </ContainerImgListOfActions>
                        <TextListOfActions id = "containerListOfActions__text" check= {check}>
                            <p>{e}</p>
                        </TextListOfActions>   
                    </ContainerListOfActions>
                )
            }
        }
    });
    return <DisplayListOfActions >{actions}</DisplayListOfActions>
}
ListOfActions.propTypes = {
    emotion: PropTypes.object,
    check: PropTypes.number
    }

export default ListOfActions;