import styled from "styled-components";
import PropTypes from "prop-types";

const ContainerAddItem = styled.div`
    position: absolute;
    padding: 20px;
    top: 50%;
    left: 50%; 
    border-radius: 20px;
    transform: translate(-50%);
    background-color: grey;
    border: 15px solid;
    border-color: ${({color}) => color};
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ease-in-out both;
    animation-duration: 1.5s;
    animation-delay: 0s;
    animation-name: ${({act}) => act };
    
    @keyframes entering{
        from{
            
            transform: translateX(100vw)
        }
        to{
            transform: translateX(-50%)
        }
    }
    @keyframes closing{
        from{
            transform: translateX(-50%)
        }
        to{
            transform: translateX(100vw);  
        }
    }
        & input{
        }
`
const AddItem = ({act, setAct, color}) => {
    return(
        <ContainerAddItem act = {act} id = "AddItem__Container" color = {color}>
            <label htmlFor = "newAction" style = {{color: '#FFFFFF', fontSize: '22px'}}>Qu&apos;elle action veux-tu ajouter?</label>
            <input type="text" id = "newAction" placeholder = {color} style = {{width: '90%', height: '50px', fontSize:'20px', margin: '10px auto'}}/>
            <div>
                <button style = {{margin: '5px'}}  >Valider</button>
                <button style = {{margin: '5px'}} onClick = {() => setAct('closing')}>Annuler</button>
            </div>
        </ContainerAddItem>
    )
}
export default AddItem;

AddItem.propTypes = {
    act: PropTypes.function,
    setAct: PropTypes.function,
    color: PropTypes.string
}
