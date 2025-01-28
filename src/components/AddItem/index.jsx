import {useContext} from "react";
import { AddItemGreenContext } from "../../utils/context/Context";
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
    border-color: color;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: 1.5s ease-in-out both;
    animation-name: ${({act}) => act == "closing"? act : act};
    
    @keyframes entering{
        from{
            display: contents;
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
            display: none;
        }
    }
        & input{
        }
`
const AddItem = ({act}) => {
    const {setAddItemGreen} = useContext(AddItemGreenContext); console.log('act:', act );
    return(
        <ContainerAddItem act = {act} id = "AddItem__Container" >
            <label htmlFor = "newAction" style = {{color: '#FFFFFF', fontSize: '22px'}}>Qu&apos;elle action veux-tu ajouter?</label>
            <input type="text" id = "newAction" placeholder = {act} style = {{width: '90%', height: '50px', fontSize:'20px', margin: '10px auto'}}/>
            <div>
                <button style = {{margin: '5px'}}  >Valider</button>
                <button style = {{margin: '5px'}} onClick = {() => setAddItemGreen('closing')}>Annuler</button>
            </div>
        </ContainerAddItem>
    )
}
export default AddItem;

AddItem.propTypes = {
    act: PropTypes.string
}
