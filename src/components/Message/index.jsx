import PropTypes from "prop-types";
import styled from "styled-components";
import {useEffect} from "react";
import {useNavigate} from "react-router";

const Container = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 30px;
    border: 1px black solid;
    background-color: #33FF71;
    color: #000;
    padding: 100px;
`;
const Message = ({message}) => {
    const Navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=> {
            Navigate("/Thermometer")
        }, 3000
    )
    })
    return(
        <Container>
           {message}
        </Container>
        
    )
}

Message.propTypes = {
    message: PropTypes.string
}

export default Message;