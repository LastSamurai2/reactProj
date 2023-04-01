import React from "react";
import './style.css'

function MainCard(props){
    return (
        <div className="main-card">
          <div className="c-body">
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </div>
          <div className="c-image">
            <img src="https://cdn.dribbble.com/userupload/2791040/file/original-1980fac1fd5364e69bd3b325f4a876b6.jpg?resize=400x0"></img>
          </div>
        </div>
    )
    ;
}

export default MainCard;


