import PropTypes from "prop-types";

function Credits({creditsStatusUpdate}){
    const closeCredits = () => {
        creditsStatusUpdate(false);
    }
    return(
        <div id = "Credits">
            <div id = "Credits__close" onClick = {closeCredits}><strong>X</strong></div>
            <div>
                <h2>CREDITS</h2>
                <p>Merci à <b>PIXABAY</b> pour les photos et images libres de droits qui illustrent ce site.</p>
                <p>Les liens vers les ressources en ligne utilisées sont:</p>
                <ul>=&gt; <u>Relaxation profonde:</u>
                    <li>Lien 1: 
                        <a href = "https://www.youtube.com/watch?v=rpB05dacHDo" target = "_blank"> https://www.youtube.com/watch?v=rpB05dacHDo</a>
                    </li>
                    <li>Lien 2:
                        <a href = "https://www.youtube.com/watch?v=14-yffdsy1w" target = "_blank"> https://www.youtube.com/watch?v=14-yffdsy1w</a>
                            
                    </li>
                    <li>Lien 3:
                        <a href ="https://www.youtube.com/watch?v=8vJMzuDLxig" target = "_blank"> https://www.youtube.com/watch?v=8vJMzuDLxig</a>
                    </li>
                </ul>
                <ul>=&gt; <u>Cohérence cardiaque:</u>
                    <li>Lien 1: 
                        <a href = "https://www.youtube.com/watch?v=Q0JP_TV6sgY" target = "_blank"> https://www.youtube.com/watch?v=Q0JP_TV6sgY</a>
                    </li>
                    <li>Lien 2:
                        <a href = "https://www.youtube.com/watch?v=bM3mWlq4M8E" target = "_blank"> https://www.youtube.com/watch?v=bM3mWlq4M8E</a>
                    </li>
                    <li>Lien 3:
                        <a href = "https://www.youtube.com/watch?v=MepDpceB-28" target = "_blank"> https://www.youtube.com/watch?v=MepDpceB-28</a>
                    </li>
                </ul>
                <ul>=&gt; <u>Exercices physiques:</u>
                    <li>Lien 1:
                        <a href = "https://www.youtube.com/watch?v=O1l1DBqYUfc" target = "blank"> https://www.youtube.com/watch?v=O1l1DBqYUfc</a>
                    </li>
                    <li>Lien 2:
                        <a href = "https://www.youtube.com/watch?v=nHzveG3uyho" target = "blank"> https://www.youtube.com/watch?v=nHzveG3uyho</a>
                    </li>
                    <li>Lien 3:
                        <a href = "https://www.youtube.com/watch?v=3bxihqPKF08" target = "_blank"> https://www.youtube.com/watch?v=3bxihqPKF08</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Credits;

Credits.propTypes = {
    creditsStatusUpdate: PropTypes.func
}