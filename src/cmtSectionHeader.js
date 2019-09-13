import React from 'react';

export const CommentSectionHeader = () => (
    <>
        <div className="comments-count">
            <h2 style={{ fontSize: "19px" }}>1.235 comments</h2>
        </div>
        <div className="sort-by features">
            <button>
                <img src="buttons/sortBy-btn.svg" alt="" />
                <h4>SORT BY</h4>
            </button>
        </div>
    </>
);