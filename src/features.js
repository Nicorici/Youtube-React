import React from "react";

export const Features = () => (
    <div className="features" >
        <ul style={{ float: "right" }}>
            <li className="listElements" id="h-button">
                <button>
                    <img src="buttons/search-btn.svg" alt="" />
                </button>
            </li>
            <li className="listElements">
                <button className="tooltip">
                    <span className="tooltiptext">Live Broadcast</span>
                    <img src="buttons/broadcast-btn.svg" alt="" />
                </button>
            </li>
            <li className="listElements">
                <button className="tooltip">
                    <span className="tooltiptext">Youtube Applications</span>
                    <img src="buttons/applications-btn.svg" alt="" />
                </button>
            </li>
            <li className="listElements">
                <button className="tooltip">
                    <span className="tooltiptext">Messages</span>
                    <img src="buttons/messages-btn.svg" alt="" />
                </button>
            </li>
            <li className="listElements">
                <button className="tooltip">
                    <span className="tooltiptext">Notifications</span>
                    <img src="buttons/notifications-btn.svg" alt="" />
                </button>
            </li>
            <li>
                <button className="tooltip">
                    <span className="tooltiptext">My Account</span>
                    <img id="avatar" width="32" height="32"
                        src="https://yt3.ggpht.com/-laUvQ57jLH0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdLyTJCTPBXHkfIpdGeMhaO_9ikdg/s88-mo-c-c0xffffffff-rj-k-no/photo.jpg" />
                </button>
            </li>
        </ul>
    </div>
)