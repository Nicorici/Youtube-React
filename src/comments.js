import React from 'react';
import { Comment } from './comment'

export const Comments = ({ comments }) => (
    <div className="comments">
        <ul>{
            comments.map((element, i) => (
                <Comment
                    key={i}
                    content={element} />
            ))
        }
        </ul>
    </div>
);