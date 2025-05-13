import PropTypes from "prop-types";
import ListOfActions from "../ListOfActions";

const Emotion = ({emotion, setContainerColor}) => {console.log('emotion',emotion)
        setContainerColor(emotion.color);
        return(
            <>
                {
                emotion.title != '' ? 
                    <>
                        <div>
                            <img src = {emotion.icon} alt = "Icône émotion" id = 'thermometer__frameEmotion'/>
                            <h2 id = "emotion__title">{emotion.title}</h2>
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
        setContainerColor: PropTypes.function
    }

    export default Emotion;