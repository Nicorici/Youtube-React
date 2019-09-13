import React from 'react';

export const VideoSummary = ({ title, publisher, views }) => (
    <div className="video-elements">
        <strong>{title}</strong>
        <h5>{publisher}</h5>
        <h5 className="views">{views}</h5>
    </div>
);