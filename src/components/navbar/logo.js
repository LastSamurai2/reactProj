import React from "react";
import './style.css';


function Logo(props){
    return (
    <div className="logo">
        <div className="image-logo">
        <img className="image-logo_1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"></img>
        </div>
        <div className={props.className}>
            React Project
        </div>
    </div>
    )
    ;
}

export default Logo;