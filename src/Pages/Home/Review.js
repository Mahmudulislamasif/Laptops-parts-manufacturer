import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Rating from 'react-rating'
const Review = ({review}) => {
    const {commentDescription,ratings}=review;
    return (
        <div class="card card-compact bg-slate-50 shadow-xl">
        <div class="avatar">
        <div class="w-24 mt-2 rounded-full ring mx-auto ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
        </div>
        </div>
        <div class="card-body">
            <p>{ commentDescription}</p>
            <Rating  initialRating={ratings} emptySymbol={<FontAwesomeIcon icon={faStar}/>} fullSymbol={<FontAwesomeIcon style={{color:'goldenrod'}} icon={faStar}/>}
            readonly
            >
            </Rating>
        </div>
        <div>
        
            
        </div>
        
        </div>
    );
};

export default Review;