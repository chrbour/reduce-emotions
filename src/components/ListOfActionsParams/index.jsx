import PropTypes from "prop-types";
import styled from "styled-components";
import {useState, useContext, useEffect} from 'react';
import {SavingParamsContext, EmotionsContext} from "../../utils/context/Context";
import AlertParam from "../AlertParam";


const DisplayListOfActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    width: 50vw;
    height: 100%;
`
const ContainerListOfActions = styled.div`
    grid-template: 100% / 50px 100px 300px;
    border: 1px solid #000000;
    width: 450px; 
    display: grid;
    margin: 1px;
`  
const ContainerImgListOfActions = styled.div`
    border-right: 1px solid #000000;
    display: flex;
    align-items: center;
`
const ImgListOfActions = styled.img`
    height: 50px !important;
    width: 74px;
    margin: 12.5px;
`
const TextListOfActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000; 
    margin: 20px;
    font-size: 12px;
`

const ListOfActionsParams = ({display, selection}) => {
    const {image_LinkAndName} = useContext(EmotionsContext);
    let actionPreSelected = [];
    let picture;
    let selectionArray = Object.keys(selection).map((key) => [Number(key), selection[key]]);
    selectionArray.map((e,id) => { if (selectionArray[id][1].name === display.name){
        actionPreSelected = selectionArray[id][1].action;
    }});     
    const [itemsChecked, setItemsChecked] = useState(actionPreSelected);
    const [nbActionsGreen, updateNbActionsGreen] = useState(selection.greenEmotion.action.length);
    const [nbActionsYellow, updateNbActionsYellow] = useState(selection.yellowEmotion.action.length);
    const [nbActionsRed, updateNbActionsRed] = useState(selection.redEmotion.action.length);
    const [nbActionsBrown, updateNbActionsBrown] = useState(selection.brownEmotion.action.length);
    const [nbActionsBlack, updateNbActionsBlack] = useState(selection.blackEmotion.action.length); 
    const [displayAlert, setDisplayAlert] = useState(false);
    const {params, updateParams} = useContext(SavingParamsContext);
    let name = display.name;

    const isChecked = (id, element) => {
        if (itemsChecked?.includes(element)){
            return true
            }
        else{
            return false
        };
    };

    const checkboxClick = (e) => {
        const {value, checked} = e.target;
        if ((checked && itemsChecked?.length >= 5) || (!checked && itemsChecked.length == 1)){
           setDisplayAlert(true);
            return;
        }
        else {
            displayAlert == true? setDisplayAlert(false) : true
        }
        setItemsChecked((prevCheckedItems)=>{
            if (checked){
                const addingItem = [...prevCheckedItems, value];
                switch(display.name){
                    case 'greenEmotion': updateNbActionsGreen(nbActionsGreen + 1); break;
                    case 'yellowEmotion': updateNbActionsYellow(nbActionsYellow + 1); break;
                    case 'redEmotion': updateNbActionsRed(nbActionsRed + 1); break;
                    case 'brownEmotion': updateNbActionsBrown(nbActionsBrown + 1); break;
                    case 'blackEmotion': updateNbActionsBlack(nbActionsBlack + 1); break;
                };
                console.log('addingItem', addingItem, 'params', params[display.ContainerImgListOfActions]);
                const paramsActualized = params;
                paramsActualized[display.name].action = addingItem;
                let objLinea = JSON.stringify(paramsActualized);
                localStorage.setItem("emotions", objLinea);
                return addingItem;
            }
            else {
                const removingItem = prevCheckedItems.filter((e) => e != value);
                switch(display.name){
                    case 'greenEmotion': updateNbActionsGreen(nbActionsGreen - 1); break;
                    case 'yellowEmotion': updateNbActionsYellow(nbActionsYellow - 1); break;
                    case 'redEmotion': updateNbActionsRed(nbActionsRed - 1); break;
                    case 'brownEmotion': updateNbActionsBrown(nbActionsBrown - 1); break;
                    case 'blackEmotion': updateNbActionsBlack(nbActionsBlack - 1); break;
                }
                console.log('removingItem', removingItem,'params', params[display.name]);
                const paramsActualized = params;
                paramsActualized[display.name].action = removingItem;
                let objLinea = JSON.stringify(paramsActualized);
                localStorage.setItem("emotions", objLinea);
                return removingItem;
            }
        });console.log('itemsCheked',itemsChecked, value);
        console.log('selection',selection);
    };
    const erase = (e) => {
        e.preventDefault();
        let element = e.target.dataset.element;
        
        let index = selection[name].option.indexOf(element);
        console.log("poubelle cliquée avant", name,selection[name].option, index);
        selection[name].option.splice(index,1);
        console.log("poubelle cliquée après", name,selection[name].option, index);
        //const {checked, value} = e.target;
        //console.log("Effacement:",value, checked)
    }

    let index = -1; 
    let actions = image_LinkAndName.map((AdressAndName, id) => {
        for (let element of display.action){  
            if(element === AdressAndName){
                index++;
                picture = image_LinkAndName[id-1];
                return (
                    <ContainerListOfActions id = "containerListOfActions" key = {AdressAndName} >
                            <input type = "checkbox" id = {AdressAndName} value = {element} 
                                checked = {isChecked(`checkbox${index}`, element)}
                                onChange = {checkboxClick}
                            />
                        <ContainerImgListOfActions id = "containerListOfActions__contImg" >
                            <ImgListOfActions src={picture} alt = "actions" />
                        </ContainerImgListOfActions>
                        <TextListOfActions id = "containerListOfActions__text">
                            {element}
                        </TextListOfActions>   
                    </ContainerListOfActions>
                )
            }
        };
    });
    let options = "";
    if (selection[name].option == null || selection[name].option == ""){
        options = null;
    }
    else{
        options = selection[name].option.map((element, id)=>{
                return (
                    <ContainerListOfActions id = "containerListOfActions" key = {id} >
                            <input type = "checkbox" id = {id} value = {element} 
                                checked = {isChecked(`checkbox${index}`, element)}
                                onChange = {checkboxClick}
                            />
                        <ContainerImgListOfActions id = "containerListOfActions__contImg" >
                            <ImgListOfActions src={display.icon} alt = "actions" />
                        </ContainerImgListOfActions>
                        <TextListOfActions id = "containerListOfActions__text">
                            {element}
                            <i style = {{fontSize: "20px", margin: "0"}} className="fa-solid fa-trash-can" data-Element = {element} onClick = {erase}></i>
                        </TextListOfActions>   
                    </ContainerListOfActions>
                )
    }
       
    );
    }
    useEffect (() => {
        updateParams((params) => {
            let allParams = {...params};
            allParams[name]={
                name: name,
                action: itemsChecked,
                option: selection[name].option ,
            };
            return (allParams)
        });
        // let objLinea = JSON.stringify(params);
        // localStorage.setItem("emotions", objLinea);    
        // console.log('params actuels', params);
    },[itemsChecked]);

    return <DisplayListOfActions >
                {actions}
                {options}
                {displayAlert == true? <AlertParam number = {itemsChecked.length}/> : null}   
            </DisplayListOfActions>
}
    

ListOfActionsParams.propTypes = {
    display: PropTypes.object,
    selection: PropTypes.object,
    option: PropTypes.object
    }

export default ListOfActionsParams;