import React from 'react';
import { WriteComment } from './writeComment';
import { CommentSectionHeader } from './cmtSectionHeader';
import { Comments } from './comments';

export const CommentsContainer = ({ comments }) => (
    <div className="comments-container">
        <CommentSectionHeader />
        <WriteComment />
        <Comments comments={comments} />
    </div>
)