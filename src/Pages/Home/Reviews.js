import React,{useState,useEffect} from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
         fetch(' https://vast-badlands-64337.herokuapp.com/comments')
         .then(res=>res.json())
         .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <h1 className="text-5xl text-purple-500 m-3">Reviews</h1>
            <div className="grid mx-auto grid-cols-1 lg:grid-cols-3 gap-5">
            {
              reviews.map(review=><Review key={review._id} review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;