import { useState } from "react";
import {CreditsContext} from "../CreditsContext";
import PropTypes from "prop-types";

export const CreditsProvider = ({children}) => {
    console.log('provider Ok');
    const [creditsStatus, creditsStatusUpdate] = useState(false);
    return(
        <CreditsContext.Provider value = {{creditsStatus, creditsStatusUpdate}}>
            {children}
        </CreditsContext.Provider>
    )
}
CreditsProvider.propTypes = {
    children: PropTypes.object
}