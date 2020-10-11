import React from 'react';
import './ChatHeader.css';
import NotificationIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function ChatHeader() {
    return (
        <div className="chatheader">
            <div className="chatheader__left">
                <h3>
                    <span className="chatheader__hash">
                        #
                    </span>
                    React Developers
                </h3>
            </div>
            <div className="chatheader__right">
                <NotificationIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatheader__search">
                    <input type="text" placeholder="Search" />
                    <SearchRoundedIcon />
                </div>

                <SendRoundedIcon />
                <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader