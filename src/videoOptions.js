import React from 'react';

export const VideoOptions = ({ likes, dislikes }) => (
    <ul style={{ marginTop: "0", float: "right" }}>
        <li>
            <button>
                <img src="buttons/likeButton.svg" />
                <h4>{likes}</h4>
            </button>
        </li>
        <li>
            <button>
                <img src="buttons/dislikeButton.svg" />
                <h4>{dislikes}</h4>
            </button>
        </li>
        <li>
            <button>
                <img src="buttons/share-btn.svg" />
                <h4>SHARE</h4>
            </button>
        </li>
        <li>
            <button>
                <img src="buttons/save-btn.svg" />
                <h4>SAVE</h4>
            </button>
        </li>
        <li>
            <button>
                <img src="buttons/options-btn.svg" />
            </button>
        </li>
    </ul>
);
