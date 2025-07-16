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
                <>
                    <div >
                        <img src = {icon} alt = "Icône émotion" id = 'thermometer__frameEmotion'/>
                        <h2 id = "emotion__title">{title}</h2>
                    </div>
                    <ListOfActions display = {emotion} />
                </>
                :
                <>
                <h2 style = {{display: 'flex', justifyContent: 'center', color: 'black'}}>Sélectionne une émotion à l&apos;aide des flèches</h2>
                <div style = {{color: 'black', display: 'flex'}}>
                    <img style = {{width: '20%'}} src = {green} alt="" />
                    <img style = {{width: '20%'}} src = {yellow} alt="" />
                    <img style = {{width: '20%'}} src = {red} alt="" />
                    <img style = {{width: '20%'}} src = {brown} alt="" />
                    <img style = {{width: '20%'}} src = {black} alt="" />
                </div>
                </>
            }
        </>
    )
}
    
    Emotion.propTypes = {
        emotion: PropTypes.object,
        setContainerColor: PropTypes.func
    }

    export default Emotion;