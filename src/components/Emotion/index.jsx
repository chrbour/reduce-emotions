import PropTypes from "prop-types";
import ListOfActions from "../ListOfActions";

const Emotion = ({emotion}) => {
    const {icon, title} = emotion;console.log('Emotion:', emotion);
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
                : null
            }
        </>
    )
}
    
    Emotion.propTypes = {
        emotion: PropTypes.object,
        setContainerColor: PropTypes.func
    }

    export default Emotion;