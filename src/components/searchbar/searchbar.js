import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function SearchBar(){
    return (
        <div className="search-bar">
          <div className="searcher">
           <button className="btn">
        <FontAwesomeIcon icon={faSearch} />        
        </button>
        <input className="intput1"
          type="text"
          placeholder="Wyszukaj..."
        />
        </div>
        <div class="btn-star">
          <button>
        <FontAwesomeIcon icon={faStar} />  Star |  47     
        </button>
        </div>
        <div>
          <img class="user-img" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" ></img>
        </div>
       
      </div>
    )
    ;
}

export default SearchBar;


