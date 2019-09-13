import React from 'react';
import {Video} from './video';

export const VideosList = ({ videos, onClickVideo}) => (
    <div className="videos-list">
        <div id="up-next">
            <h2 style={{ margin: "0px 0px 0px 6px", fontSize: "18px" }}>Up-next</h2>
        </div>
        <div id="autoplay" style={{ display: "flex" }}>
            <h4>AUTOPLAY</h4>
            <div className="toggle">
                <label className="switch">
                    <input type="checkbox" />
                    <div></div>
                </label>
            </div>
        </div>
        <div className="videos">
            <ul>
                {
                    videos.map(video => (
                        <Video key={video.id}
                            id={video.id}
                            thumbnail={video.thumbnail}
                            title={video.title}
                            publisher={video.publisher}
                            views={video.views} 
                            onClickVideo={onClickVideo}
                            />
                    )
                    )
                }
            </ul>
        </div>
    </div>);