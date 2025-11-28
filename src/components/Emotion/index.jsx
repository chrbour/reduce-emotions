import PropTypes from "prop-types";
import ListOfActions from "../ListOfActions";
import green from "../../assets/svg/Nuage_vert.svg";
import yellow from "../../assets/svg/Nuage_jaune.svg";
import red from "../../assets/svg/Nuage_rouge.svg";
import brown from "../../assets/svg/Nuage_marron_avec_pieds_noirs.svg";
import black from "../../assets/svg/Nuage_noir_avec_pieds_noirs.svg";

const Emotion = ({emotion}) => {
    const {icon, title} = emotion;
    return(
        <>
            {
            emotion.title != '' ? 
                <div id = "emotionContainer__selected">
                    <div id = "emotionContainer__selected--description">
                        <img src = {icon} alt = "Icône émotion" id = 'thermometer__frameEmotion'/>
                        <h2 id = "emotionContainer__selected--title">{title}</h2>
                    </div>
                    <ListOfActions display = {emotion} />
                </div>
                :
                <div id = "emotionContainer__notSelected">
                    <h2 id = "emotionContainer__notSelected--selectEmotions" style = {{color: '#000000'}}>Sélectionne une émotion à l&apos;aide des flèches</h2>
                    <div id = "emotionContainer__notSelected--icons">
                        <img src = {green} alt="nuage vert" />
                        <img src = {yellow} alt="nuage jaune" />
                        <img src = {red} alt="nuage rouge" />
                        <img src = {brown} alt="nuage marron" />
                        <img src = {black} alt="nuage noir" />
                    </div>
                </div>
            }
        </>
    )
}
    
    Emotion.propTypes = {
        emotion: PropTypes.object
    }

    export default Emotion;