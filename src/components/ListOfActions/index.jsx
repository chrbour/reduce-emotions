import PropTypes from "prop-types";
import styled from "styled-components";
import {useContext} from "react";
import {EmotionsContext} from "../../utils/context/Context";

const ContainerListOfActions = styled.div`
    display: grid;
    grid-template: 100% / 150px 300px;
    border: 1px solid #000000;
    width: 500px; 
`  
const ContainerImgListOfActions = styled.div`
    border-right: 1px solid #000000;
    display: flex;
    align-items: center;
`
const ImgListOfActions = styled.img`
    height: 100px !important;
    width: 148px;
    margin: auto;
`
const TextListOfActions = styled.div`
    color: #000000; 
    margin: auto 20px;
    font-size: 20px};
`
const ListOfActions = ({display}) => {
    const {image_LinkAndName} = useContext(EmotionsContext);
    let picture;
    let options = [];
    let actions = image_LinkAndName.map((i, id) => {
        for (let element of display.action){
            if(element === i){
                picture = image_LinkAndName[id-1];
                return (
                    <ContainerListOfActions id = "containerListOfActions" key = {i} >
                        <ContainerImgListOfActions id = "containerListOfActions__contImg" >
                            <ImgListOfActions src={picture} alt = "actions" />
                        </ContainerImgListOfActions>
                        <TextListOfActions id = "containerListOfActions__text" >
                            <p>{element}</p>
                        </TextListOfActions>   
                    </ContainerListOfActions>
                )
            }
        }    
    });
    display.action.map((e)=>{
        if (image_LinkAndName.includes(e) == false){
            options.push(e)
        }
    })
    let optionsSelected = options.map((element, id)=>{
            picture = display.icon;
            return (
                    <ContainerListOfActions id = "containerListOfActions" key = {id} >
                        <ContainerImgListOfActions id = "containerListOfActions__contImg" >
                            <ImgListOfActions src={picture} alt = "actions" />
                        </ContainerImgListOfActions>
                        <TextListOfActions id = "containerListOfActions__text" >
                            <p>{element}</p>
                        </TextListOfActions>   
                    </ContainerListOfActions>
                )
        });
    return <div>{actions}{optionsSelected}</div>
}

ListOfActions.propTypes = {
    display: PropTypes.object,
    check: PropTypes.number,
    selection: PropTypes.object,
    }

export default ListOfActions;