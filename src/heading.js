import "./heading.css";
import React, {  useContext } from 'react';
import themeContext from "./usecontext"

function Heading()
{
    const {theme} = useContext(themeContext);
    const {changeTheme} = useContext(themeContext);
    return(
        <div className = {`heading ${theme?"light":"black"}`}>
            <h1 className = 'primary-h'>This is Ahmad Decoded Here  </h1>
            
        </div>
    )
}

export default Heading;