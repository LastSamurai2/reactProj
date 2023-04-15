import React from "react";
import './style.css';
import SearchBar from "../searchbar/searchbar";
import MainContent from "../maincontent/maincontent";

function Contet(props){
    return (
    <div class='content' id={props.className}>
        <SearchBar/>
        <MainContent fontSize={props.fontSize}/>
        
    </div>
    )
    ;
}

export default Contet