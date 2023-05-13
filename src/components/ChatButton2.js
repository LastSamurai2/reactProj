import React from "react";
import Chat from "./Chat";
import ChatIcon from "./ChatIcon";

let stateChat = true;

function chatButton(props){
if (props.show) {
    return <Chat />
}else{
    return <ChatIcon />
}
}

export default chatButton