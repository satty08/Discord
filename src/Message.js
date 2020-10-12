import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>
                    satty
                    <span className="message__timestamp">TimeStamp</span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message
