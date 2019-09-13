import React from 'react';

export const VideoContainer = ({ source }) => (
    <div className="video-container">
        <video id="myVideo" src={source} frameBorder="0" controls autoPlay />
    </div>);