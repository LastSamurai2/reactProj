import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function NavOption(props){
    return (
        <div className={props.className}>
        <a href="#"> 
          <div className="icon">
          <FontAwesomeIcon icon={props.icon} />
          </div>
          <div className="text"> 
            {props.text}
          </div>
          </a>
        </div>
    )
    ;
}

export default NavOption;


