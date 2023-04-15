import React from "react";
import './style.css'
import '../../App.css'

function MainCard(props){
    return (
        <div className="main-card DP-text DP-card-color">
          <div className="c-body">
            <p class="DP-main-card-header">{props.header}</p>
            <p style={{ fontSize: `${props.fontSize}px` }}>{props.body}</p>
          </div>
          <div className="c-image">
            <img src="https://cdn.dribbble.com/userupload/2791040/file/original-1980fac1fd5364e69bd3b325f4a876b6.jpg?resize=400x0"></img>
          </div>
        </div>
    )
    ;
}

export default MainCard;


