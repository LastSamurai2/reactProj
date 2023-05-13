import React from "react";
import '../App.css'

function ChatIcon() {
    const show = localStorage.getItem('chat');
    return <div className="circle-icon">
        {}
    </div>;
}
export default ChatIcon