import React from "react";
import './style.css'
import Card from "../card/card";
import MainCard from "../card/maincard";


function MainContent(props){
    return (
        <div className="main-content">
          <div className="main-left">
            <MainCard header="Congratulations John!" body="You have done 72% more sales today. Check your new bandage in your profile."  fontSize={props.fontSize}/>
            <MainCard header="Total Revenue" body="Second text example " fontSize={props.fontSize}/>
          </div>
          <div className="main-right">
           <div className="test">
            <div className="col1"><Card header="Profit" body="$ 12,628" footer="+72,80%" fontSize={props.fontSize}/></div>
            <div className="col2"><Card header="Sales" body="$ 4,679" footer="+72,80%" fontSize={props.fontSize}/></div>
            </div>
            <div className="test">
            <div className="col2"><Card header="Payments" body="$ 4,679" footer="+72,80%" fontSize={props.fontSize}/></div>
            <div className="col2"><Card header="Transactions" body="$ 4,679" footer="+72,80%" fontSize={props.fontSize}/></div>
            </div>
            
            <div className="col2"><Card header="Profile report" body="$ 84,679" footer="+68,20%" fontSize={props.fontSize}/></div>
            
            
            
          </div>
        </div>
    )
    ;
}

export default MainContent;


