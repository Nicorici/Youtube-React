import React from 'react';
import { VideoContainer } from './videoContainer';
import { VideoDetails } from './videoDetails';
import { VideosList } from './videosList';
import { CommentsContainer } from './commentsContainer';


export const Container = ({ selectedVideo, videos, onClickVideo }) => {
    console.log("in container");
    return (
        <div id="grid-container">
            <VideoContainer source={selectedVideo.source} />
            <VideoDetails currentVideo={selectedVideo} />
            <VideosList videos={videos} onClickVideo={onClickVideo} />
            <CommentsContainer comments={selectedVideo.comments} />
        </div>
    );
};