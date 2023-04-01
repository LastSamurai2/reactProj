import React from "react";
import './style.css';
import SearchBar from "../searchbar/searchbar";
import MainContent from "../maincontent/maincontent";

function Contet(){
    return (
    <div class='content'>
        <SearchBar/>
        <MainContent/>
    </div>
    )
    ;
}

export default Contet