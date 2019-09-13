import React from 'react';

export const Channel = ({ publisher, date, description }) => (
    <>
        <div id="channel-logo">
            <img src="avatar1.png" style={{ width: "50px", height: "50px" }} />
        </div>
        <div id="channel-name">
            <strong style={{ fontSize: "16px" }}>{publisher}</strong>
            <h3 style={{ fontSize: "13px" }}>{date}</h3>
        </div>
        <div id="subscribe">
            <button>
                <h4 style={{ color: "white" }}>SUBSCRIBE 226K</h4>
            </button>
        </div>
        <div id="video-description">{description}</div>
        <div id="show-more">
            <button style={{ padding: "0" }}>
                <h4 style={{ margin: "10px", color: "#888" }}>SHOW MORE</h4>
            </button>
        </div>
    </>
);
