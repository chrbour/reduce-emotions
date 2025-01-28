import { useState } from "react";
import {AddItemGreenContext} from "../Context";
import PropTypes from "prop-types";

export const AddItemGreenProvider = ({children}) => {
    const [addItemGreen, setAddItemGreen] = useState("no");
    return(
        <AddItemGreenContext.Provider value = {{addItemGreen, setAddItemGreen}}>
            {children}
        </AddItemGreenContext.Provider>
    )
}
AddItemGreenProvider.propTypes = {
    children: PropTypes.object
}