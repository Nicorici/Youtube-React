import React from 'react';
import { Thumbnail } from './thumbnail';
import { VideoSummary } from './videoSummary'
export const Video = ({ id, thumbnail, title, publisher, views, onClickVideo }) => {
    const handleVideoClick=(e)=>{
        e.preventDefault();
        onClickVideo(id);
    };
    return (
        <li>
            <a href='#' onClick= {handleVideoClick} className="yt-video" >
                <Thumbnail thumbnail={thumbnail} />
                <VideoSummary title={title}
                    publisher={publisher}
                    views={views} />
            </a>
        </li>
    );
}