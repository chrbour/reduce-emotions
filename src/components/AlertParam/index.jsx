import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
   align-items: center;
    border: 5px solid red;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    background-color: red;
    color: white;
    font-size: 20px;
    border-radius: 20px;
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

function AlertParam(){
    return(
        <Container>
            <p>Attention, votre sélection ne peut contenir plus de 5 items.</p>
            <p>Impossibilité de sélectionner un nouvel élément.</p>
        </Container>
    )
};

export default AlertParam;