import React from "react";
import './style.css';

function NavLabel(props){
    return (
        <div className={props.className}>
            {props.text}
        </div>
    )
    ;
}

export default NavLabel;


