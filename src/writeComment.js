import React from 'react';

export const WriteComment = () => (
    <section className="write-com">
        <img className="avatar" alt="" height="40" width="40"
            src="https://yt3.ggpht.com/-laUvQ57jLH0/AAAAAAAAAAI/AAAAAAAAAAA/7WLYGN8Gam4/s48-c-k-no-mo-rj-c0xffffff/photo.jpg" />
        <div style={{ marginTop: "15px" }}>
            <input id="write" type="text" placeholder="Write your comment here..." />

            <button id="submit-btn">
                <h4 style={{ color: "white" }}>COMMENT</h4>
            </button>
            <button id="cancel-btn">
                <h4>CANCEL</h4>
            </button>
        </div>
    </section>
);