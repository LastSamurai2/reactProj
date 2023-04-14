import React, { useState } from "react";
import './style.css';
import NavOption from "../navoption/navoption";
import NavLabel from "../navoption/navlabel";
import Logo from "./logo";
import App from "../../App";
import Layout from "../layout";
import MainContent from "../maincontent/maincontent";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';


function NavbarLeft(){
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };


    return (
      <Router>
                
    <div className={isActive ? 'navbar2': 'navbar'} >
        <Logo className={isActive ? 'text-logo2': 'text-logo'}/>
        <Link to="/">
        <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faHouse} text="Dashboard" />
        </Link>
        <Link to="/layouts">
        <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faTable} text="Layouts" />
        </Link>
        <NavLabel className={isActive ? 'label1': 'label'} text="PAGES" />
        <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faGear} text="Account setings" />
        <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faLock} text="Authentisations" />
        <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faCube} text="Misc" />
        <NavLabel className={isActive ? 'label1': 'label'} text="COMPONENTS" />
        <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faClipboardList} text="Cards" />
        <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faCreditCard} text="User interface" />
        <div>
            Wybierz tryb  
            <button 
      onClick={toggleClass} >kliknij</button>
        </div>

    </div>
    </Router>
    );
}

export default NavbarLeft;