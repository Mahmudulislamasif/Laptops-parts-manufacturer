import React from 'react';

const Review = ({review}) => {
    const {commentDescription}=review
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
        <div class="avatar">
        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
        </div>
        </div>
        <div class="card-body">
            <p>{ commentDescription}</p>
        </div>
        </div>
    );
};

export default Review;