import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Video.css';

function VideoComponent({ thumnail, image, title, channelName, views, createdAt }) {
    return (
        <div className="video">
            <img src={image} alt="yt" />
            <div className="video_content">
                <Avatar
                    className="video_thumnail"
                    src={thumnail}
                    alt="yt"
                />
                <div className="video_title">
                    <h4>{title}</h4>
                    <h5>{channelName} | {views} | {createdAt}</h5>
                </div>
            </div>
        </div>
    )
}

export default VideoComponent
