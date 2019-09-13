import React from 'react';
import { VideoOptions } from './videoOptions';
import { Channel } from './channel';

export const VideoDetails = ({ currentVideo }) => (
    <div className="video-details">
        <div className="video-name">
            <h2>{currentVideo.title}</h2>
        </div>
        <div className="video-views">
            <h3>{currentVideo.views} views</h3>
        </div>
        <div className="video-options features"> <VideoOptions likes={currentVideo.likes} dislikes={currentVideo.dislikes} /></div>
        <div className="channel"><Channel publisher={currentVideo.publisher} date={currentVideo.date} description={currentVideo.description} />
        </div>
    </div>
);
