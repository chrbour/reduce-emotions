import { useState} from "react";
import { SavingParamsContext } from "../Context";
import PropTypes from "prop-types";

const SavingParamsProvider = ({children}) => {
    const [params, updateParams] = useState({});
    return(
        <SavingParamsContext.Provider value = {{ params, updateParams}}>
            {children}
        </SavingParamsContext.Provider>
    )
}
export default SavingParamsProvider;

SavingParamsProvider.propTypes = {
    children: PropTypes.object
}
