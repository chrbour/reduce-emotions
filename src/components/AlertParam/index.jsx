import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    align-items: center;
    text-align: center;
    border: 5px solid red;
    width: 60vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    border: 1px solid black;
    z-index: 3;
    animation: alert 0s 5s linear forwards;

    @keyframes alert{
    from {
    z-index: 1;
    opacity: 1}
    to{
    z-index: -1;
    opacity: 0}
    }
`;

function AlertParam({number}){
    return(
        <Container>
            {number == 5 ? 
            <>
                <p>Attention, votre sélection ne peut contenir plus de 5 items.</p>
                <p>Impossibilité de sélectionner un nouvel élément.</p>
            </>
            : 
            <>
                <p>Attention, votre sélection ne peut être vide.</p>
                <p>Impossibilité d&apos;annuler un nouvel élément.</p>
            </>
}
        </Container>
    )
};
AlertParam.propTypes = {
    number: PropTypes.number
}

export default AlertParam;