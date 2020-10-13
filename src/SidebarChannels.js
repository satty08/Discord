import React from 'react';
import { useDispatch } from 'react-redux';
import './SidebarChannels.css';
import { setChannelInfo } from './features/appSlice';

function SidebarChannels({ id, channelName }) {

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(setChannelInfo({
            channelId: id, channelName: channelName
        }))} className="sidebarchannels">
            <h4><span className="sidebarChannel_hash">#</span>{channelName}</h4>
        </div>
    )
}

export default SidebarChannels
