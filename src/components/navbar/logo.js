import React from "react";
import './style.css';


function Logo(props){
    return (
    <div className="logo">
        <div className="image-logo">
        <img className="image-logo_1" src="https://nextsoftware.io/files/images/logos/main/reactjs-logo.png"></img>
        </div>
        <div className={props.className}>
            React Project
        </div>
    </div>
    )
    ;
}

export default Logo;