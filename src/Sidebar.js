import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannels from './SidebarChannels';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>React Developers</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Test Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" />
                </div>
            </div>

            <div className="sidebar__channelsList">
                <SidebarChannels />
            </div>
        </div>
    )
}

export default Sidebar
