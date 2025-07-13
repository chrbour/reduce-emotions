import styled from "styled-components";
import PropTypes from "prop-types";
import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { SavingParamsContext, EmotionsContext } from "../../utils/context/Context";

const ContainerAddItem = styled.div`
    z-index: 6;
    position: absolute;
    padding: 20px;
    top: 50%;
    left: 50%; 
    border-radius: 20px;
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
            transform: translateX(100vw) translateY(-50%)
        }
        to{
            transform: translateX(-50%) translateY(-50%)
        }
    }
    @keyframes closing{
        from{
            transform: translateX(-50%) translateY(-50%)
        }
        to{
            transform: translateX(100vw) translateY(-50%);  
        }
    }
`
const Button = styled.button`
    margin: 5px;    
`
const Label = styled.label`
    font-size: 22px;
    color: #FFFFFF
`
const Input = styled.input`
    width: 90%;
    height: 50px;
    font-Size: 20px;
    margin: 10px auto
    `

const AddItem = ({...props}) => {
    const {act, setAct, display} = props;
    const color = display.color;
    const [answer, updateAnswer] = useState('');
    const {params, updateParams} = useContext(SavingParamsContext);
    const {allEmotions} = useContext(EmotionsContext);
    let Navigate = useNavigate();

    const inputChange = (e) => {
        if (e.target.value.length > 50){
            alert('Trop long');
            e.target.value = "";
        }
        updateAnswer(e.target.value)
    }
    const validation = () => {
        if(answer != '' 
            && (allEmotions[display.name].action.includes(answer) == false
            )){
                let updateOption = params[display.name].option;
                answer != updateOption && (updateOption == null || updateOption == "")? updateOption = [answer]: null;
                answer != updateOption && (updateOption != null || updateOption == "")? updateOption = [...updateOption, answer] : null;
                let updateOptions = {...params,
                    [display.name]: {...params[display.name],
                        option: updateOption
                    }
                };
                updateParams(updateOptions);
                localStorage.setItem("emotions", JSON.stringify(updateOptions));
                setAct('closing');
                setTimeout(() => {
                    updateAnswer("");
                    Navigate('/Configure')}
                    , "1500"
                );
            }
        else {
            alert('Ce champ ne peut ni être vide, ni contenir un élément déjà présent !')
        } 
    }
    const annulation = () => {
        setAct('closing');
        setTimeout(() => {updateAnswer("")}, "1500");
    }
    return(
        <ContainerAddItem act = {act} id = "AddItem__Container" color = {color}>
            <Label htmlFor = "newAction">Qu&apos;elle action veux-tu ajouter?</Label>
            <Input type="text" id = "newAction" value = {answer} onChange = {inputChange}/>
            <div>
                <Button onClick = {validation}>Valider</Button>
                <Button onClick = {annulation}>Annuler</Button>
            </div>
        </ContainerAddItem>
        
    )
}
export default AddItem;

AddItem.propTypes = {
    act: PropTypes.string,
    setAct: PropTypes.func,
    color: PropTypes.string,
    display: PropTypes.object
}
