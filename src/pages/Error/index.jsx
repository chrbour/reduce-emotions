import cancel from "../../assets/images/cancel_1920.webp"
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translate(-50%);
    font-size: 40px;
    color: red;
`
const Error = () => {
    return(
        <div>
            <img src = {cancel} alt= "Page d'erreur" />
            <Container>
                Erreur 404: Cette page n&apos; existe pas !
            </Container>
        </div>
    )
}
export default Error;