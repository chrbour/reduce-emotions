import {useNavigate} from "react-router-dom";
import {useState, useContext} from 'react';
import {SavingParamsContext, EmotionsContext} from "../../utils/context/Context";
import AddItem from '../../components/AddItem';
import Message from '../../components/Message';
import styled from "styled-components";
import ListOfActionsParams from "../../components/ListOfActionsParams";

const Container = styled.div`
    height: ${({size}) => (size+4)/2*80+"px"};
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
    let objLinea = localStorage.getItem("emotions");
    
    if (objLinea){
        selection = JSON.parse(objLinea); 
    }
    const save = () => {
        if(message == ''){
            let objLinea = JSON.stringify(params);
            localStorage.setItem("emotions", objLinea);
            setMessage('Votre sélection a été enregistrée !');
            
        }
    }
    const reset = () => {
        if(message == ''){
            localStorage.clear();
            setMessage('Retour aux paramètres par défaut.');
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
            <p>5 items max par émotion, dont 2 émotions personnalisées max.</p>
            <Container color = {allEmotions.greenEmotion.color} size = {allEmotions.greenEmotion.action.length} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.greenEmotion.icon} alt="green emotion" />
                    <h2 className = "configure__imgContainer--text" >
                        {allEmotions.greenEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams  className = "configure__listOfActions" display = {allEmotions.greenEmotion} selection= {selection} color = "Green"/>
                {params.greenEmotion.action.length < 5 && (params.greenEmotion.option?.length < 2 || params.greenEmotion.option == null)?
                    <i className="fa-solid fa-circle-plus" onClick = {() => 
                        (addItemYellow == "entering" || addItemRed == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                        null :
                        setAddItemGreen("entering")}>
                    </i>
                    : null
                }
                {addItemGreen != "no"  ? 
                    <AddItem act = {addItemGreen} setAct = {setAddItemGreen} display = {allEmotions.greenEmotion}/> 
                    : null
                }
            </Container>
            <Container color = {allEmotions.yellowEmotion.color} size = {allEmotions.yellowEmotion.action.length} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.yellowEmotion.icon} alt="yellow emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.yellowEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.yellowEmotion}  selection= {selection} color = "Yellow"/>
                {params?(params.yellowEmotion.action.length < 5 && (params.yellowEmotion.option?.length < 2 || params.yellowEmotion.option == null)?
                    <i className="fa-solid fa-circle-plus" onClick = {() => 
                        (addItemGreen == "entering" || addItemRed == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                        null :
                        setAddItemYellow("entering")}>
                    </i>
                    : null
                    ): null}
                {addItemYellow != "no"  ? 
                    <AddItem act = {addItemYellow} setAct = {setAddItemYellow} display = {allEmotions.yellowEmotion}/> 
                    : null
                }
                
            </Container>
            <Container color = {allEmotions.redEmotion.color} size = {allEmotions.redEmotion.action.length} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.redEmotion.icon} alt="red emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.redEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.redEmotion}  selection= {selection} color = "Red"/>
                {params.redEmotion.action.length < 5 && (params.redEmotion.option?.length < 2 || params.redEmotion.option == null)?
                    <i className="fa-solid fa-circle-plus" onClick = {() => 
                        (addItemGreen == "entering" || addItemYellow == "entering" || addItemBrown == "entering" || addItemBlack == "entering")? 
                        null :
                        setAddItemRed("entering")}>
                    </i>
                    : null
                }
                {addItemRed != "no"  ? 
                    <AddItem act = {addItemRed} setAct = {setAddItemRed} display = {allEmotions.redEmotion}/> 
                    : null
                }
            </Container>
            <Container color = {allEmotions.brownEmotion.color} size = {allEmotions.brownEmotion.action.length} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.brownEmotion.icon} alt="brown emotion" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.brownEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.brownEmotion}  selection= {selection} color = "Brown"/>
                {params.brownEmotion.action.length < 5 && (params.brownEmotion.option?.length <2 || params.brownEmotion.option == null)?    
                    <i className="fa-solid fa-circle-plus" onClick = {() => 
                        (addItemGreen == "entering" || addItemRed == "entering" || addItemYellow == "entering" || addItemBlack == "entering")? 
                        null :
                        setAddItemBrown("entering")}>
                    </i>
                    : null
                }
                {addItemBrown != "no"  ? 
                    <AddItem act = {addItemBrown} setAct = {setAddItemBrown} display = {allEmotions.brownEmotion}/> 
                    : null
                }
            </Container>
            <Container color = {allEmotions.blackEmotion.color} size = {allEmotions.blackEmotion.action.length} className = "configure__container" >
                <div className = "configure__imgContainer">
                    <img className = "configure__imgContainer--img" src= {allEmotions.blackEmotion.icon} alt="" />
                    <h2 className = "configure__imgContainer--text">
                        {allEmotions.blackEmotion.title}
                    </h2>
                    <p>Que puis-je faire dans ce cas-là?</p>
                </div>
                <ListOfActionsParams className = "configure__listOfActions" display = {allEmotions.blackEmotion}  selection= {selection} color = "Black"/>
                {params.blackEmotion.action.length < 5 && (params.blackEmotion.option?.length < 2 || params.blackEmotion.option == null)?
                    <i className="fa-solid fa-circle-plus" onClick = {() => 
                        (addItemGreen == "entering" || addItemRed == "entering" || addItemYellow == "entering" || addItemBrown == "entering")? 
                        null :
                        setAddItemBlack("entering")}>
                    </i>
                    : null
                }
                {addItemBlack != "no"  ? 
                    <AddItem act = {addItemBlack} setAct = {setAddItemBlack} display = {allEmotions.blackEmotion}/> 
                    : null
                }
            </Container>
            <div>
                <button className = "configure__btn" style = {{backgroundColor: '#5CE65C'}} onClick = {save}>Enregistrer</button>
                <button className = "configure__btn" style = {{backgroundColor: '#b3ebf2'}} onClick = {reset}>Réinitialiser</button>
                <button className = "configure__btn" onClick = {cancel}>Annuler</button>
            </div>
           {message != ''? <Message message = {message}/> : null}
        </div>
    )
}
    

export default Configure;