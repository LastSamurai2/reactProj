import React from "react";
import './style.css'

function Card(props){
    return (
        <div className="card">
          <div className="card-header">
            {props.header}
          </div>
          <div className="card-body"> 
            {props.body}
          </div>
          <div className="card-footer"> 
            {props.footer}
          </div>
        </div>
    )
    ;
}

export default Card;


