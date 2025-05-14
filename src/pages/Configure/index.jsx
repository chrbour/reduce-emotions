import {useNavigate} from "react-router-dom";
import {useState, useContext} from 'react';
import {SavingParamsContext, EmotionsContext} from "../../utils/context/Context";
import AddItem from '../../components/AddItem';
import Message from '../../components/Message';
import styled from "styled-components";
import ListOfActionsParams from "../../components/ListOfActionsParams";

const Container = styled.div`
    border-color: ${({color})=> color};
    color: ${({color})=> color};
`
const Configure = () => {
    let Navigate = useNavigate();
    const {params} = useContext(SavingParamsContext);
    const {defaultEmotions, allEmotions} = useContext(EmotionsContext);
    const [addItemGreen, setAddItemGreen] = useState("no");
    const [addItemYellow, setAddItemYellow] = useState("no");
    const [addItemRed, setAddItemRed] = useState("no");
    const [addItemBrown, setAddItemBrown] = useState("no");
    const [addItemBlack, setAddItemBlack] = useState("no");
    const [message, setMessage] = useState('');

    let selection = defaultEmotions;
    let option;
    let objLinea = localStorage.getItem("emotions");
    console.log('objLinea',objLinea);
    if (objLinea){
        selection = JSON.parse(objLinea); 
        if (selection.option != null){
            option = selection.option;
    }
    }
    console.log("selection",selection);
    const save = () => {
        if(message == ''){
            let objLinea = JSON.stringify(params);console.log('params',params);
            localStorage.setItem("emotions", objLinea);
            setMessage('Votre sélection a été enregistrée !');
            console.log(message);
        }
    }
    const reset = () => {
        if(message == ''){
            localStorage.clear();
            setMessage('Retour aux paramètres par défaut.');console.log(message);
        }
        }
        const cancel = () => {
        if (message == ''){
            Navigate("/Thermometer")  
        }
        
        }
    return(
        <div id = "configure" >
            <h1 id = "configure__title">Paramétrage du thermomètre</h1>
            <Container color = {allEmotions.greenEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.greenEmotion.icon} alt="green emotion" />
                    <h2 className = "configure__imgContainer--text" >
                        {allEmotions.greenEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams  className = "configure__listOfActions" display = {allEmotions.greenEmotion} selection= {selection} option = {option} color = "Green"/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemYellow == "entering" || addItemRed == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemGreen("entering")}>
                </i>
                {addItemGreen != "no"  ? 
                    <AddItem act = {addItemGreen} setAct = {setAddItemGreen} color = {allEmotions.greenEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.yellowEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.yellowEmotion.icon} alt="yellow emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.yellowEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.yellowEmotion}  selection= {selection} option = {option} color = "Yellow"/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemRed == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemYellow("entering")}>
                </i>
                {addItemYellow != "no"  ? 
                    <AddItem act = {addItemYellow} setAct = {setAddItemYellow} color = {allEmotions.yellowEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.redEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.redEmotion.icon} alt="red emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.redEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.redEmotion}  selection= {selection} option = {option} color = "Red"/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemYellow == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemRed("entering")}>
                </i>
                {addItemRed != "no"  ? 
                    <AddItem act = {addItemRed} setAct = {setAddItemRed} color = {allEmotions.redEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.brownEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.brownEmotion.icon} alt="brown emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.brownEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.brownEmotion}  selection= {selection} option = {option} color = "Brown"/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemRed == "entering" || addItemYellow == "entering" || addItemBlack == "entering")? 
                    null :
                    setAddItemBrown("entering")}>
                </i>
                {addItemBrown != "no"  ? 
                    <AddItem act = {addItemBrown} setAct = {setAddItemBrown} color = {allEmotions.brownEmotion.color}/> 
                    : null}
            </Container>
            <Container color = {allEmotions.blackEmotion.color} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.blackEmotion.icon} alt="" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.blackEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.blackEmotion}  selection= {selection} option = {option} color = "Black"/>
                <i className="fa-solid fa-circle-plus" onClick = {() => 
                    (addItemGreen == "entering" || addItemRed == "entering" || addItemYellow == "entering" || addItemBrown == "entering")? 
                    null :
                    setAddItemBlack("entering")}>
                </i>
                {addItemBlack != "no"  ? 
                    <AddItem act = {addItemBlack} setAct = {setAddItemBlack} color = {allEmotions.blackEmotion.color}/> 
                    : null}
            </Container>
            <div>
                <button className = "configure__btn" onClick = {save}>Enregistrer</button>
                <button className = "configure__btn" onClick = {reset}>Réinitialiser</button>
                <button className = "configure__btn" onClick = {cancel}>Annuler</button>
            </div>
           {message != ''? <Message message = {message}/> : null}
        </div>
    )
}
    

export default Configure;