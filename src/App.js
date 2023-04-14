import './App.css';
import React, { useState } from "react";
import NavOption from './components/navoption/navoption';
import NavLabel from './components/navoption/navlabel';
import Logo from './components/navbar/logo';
// import NavbarLeft from './components/navbar/navbarLeft';
import Contet from './components/content/contetn';
import Layout from './components/layout';
import Interface from './components/interface';
import Cards from './components/cards';
import Misc from './components/misc';
import Account from './components/account';
import Authentications from './components/authentications';
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';


function App() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="App">
      {/* <NavbarLeft /> */}




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
    <Link to="/account">
    <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faGear} text="Account setings" />
    </Link>
    <Link to="/authentications">
    <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faLock} text="Authentisations" />
    </Link>
    <Link to="/misc">
    <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faCube} text="Misc" />
    </Link>
    <NavLabel className={isActive ? 'color1': 'color2'} text="COMPONENTS" />
    <Link to="/cards">
    <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faClipboardList} text="Cards" />
    </Link>
    <Link to="/interface">
    <NavOption className={isActive ? 'naw-1': 'naw-0'} icon={faCreditCard} text="User interface" />
    </Link>
    <div>
        Wybierz tryb  
        <button 
  onClick={toggleClass} >kliknij</button>
    </div>

</div>
<Routes>
        <Route path='/' element={<Contet className={isActive ? 'color1': 'color2'}/>}/>
        <Route path='/layouts' element={<Layout/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/authentications' element={<Authentications/>}/>
        <Route path='/misc' element={<Misc/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/interface' element={<Interface/>}/>
      </Routes>
</Router>

      
    </div>
  );
}

export default App;
