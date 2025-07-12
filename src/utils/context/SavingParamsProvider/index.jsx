import { useState} from "react";
import { SavingParamsContext } from "../Context";
import PropTypes from "prop-types";

const SavingParamsProvider = ({children}) => {
    const [params, updateParams] = useState({
        noEmotion: {
            name: "",
            action: [],
            option: []
        },
        greenEmotion: {
            name: "",
            action: [],
            option: []
        },
        yellowEmotion: {
            name: "",
            action: [],
            option: []
        },
        redEmotion: {
            name: "",
            action: [],
            option: []
            },
        brownEmotion: {
            name: "",
            action: [],
            option: []
            },
        blackEmotion: {
            name: "",
            action: "",
            option: ""
            },
    });
    return(
        <SavingParamsContext.Provider value = {{ params, updateParams }}>
            {children}
        </SavingParamsContext.Provider>
    )
}
export default SavingParamsProvider;

SavingParamsProvider.propTypes = {
    children: PropTypes.object
}
