import React from 'react';

export const Comment = ({ content }) => {

    return (
        <li key={content.publisher.name} className="comment">
            <img className="avatar" src={content.publisher.logo} />
            <div className=" features" style={{ textAlign: "left", margin: "5px 0px" }}>
                <b style={{ margin: "0px 5px", fontSize: "14px" }}>{content.publisher.name}</b>
                <span style={{ fontSize: "13px", color: "#777" }}>{content.date}</span>
                <h5 style={{ fontSize: "16px", margin: "4px 8px" }}>{content.comment}</h5>
                <ul className="comment-buttons">
                    <li>
                        <button>
                            <img src="buttons/likeButton.svg" style={{ width: "20px" }} />
                        </button>
                    </li>
                    <li>
                        <h4>{content.Likes}</h4>
                    </li>
                    <li>
                        <button>
                            <img src="buttons/dislikeButton.svg" style={{ width: "20px" }} />
                        </button>
                    </li>
                    <li>
                        <button>
                            <h4>REPLY</h4>
                        </button>
                    </li>
                </ul>
                <strong style={{ fontSize: "13px", margin: "4px" }}>Show 24 replies</strong>
            </div>
        </li>
    )
}
