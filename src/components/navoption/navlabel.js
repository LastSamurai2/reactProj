import React from "react";
import './style.css';
import '../../App.css'
function NavLabel(props){
    return (
        <div id={props.className}>
            <div class="tet">
            {props.text}
            </div>
        </div>
    )
    ;
}

export default NavLabel;


