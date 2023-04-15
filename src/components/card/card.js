import React from "react";
import './style.css'

function Card(props){
    return (
        <div className="card DP-card-color">
          <div className="DP-card-header" style={{ fontSize: `${props.fontSize}px` }}>
            {props.header}
          </div>
          <div className="DP-card-text"> 
            {props.body}
          </div>
          <div className="DP-card-footer" style={{ fontSize: `${props.fontSize}px` }}> 
            {props.footer}
          </div>
        </div>
    )
    ;
}

export default Card;


