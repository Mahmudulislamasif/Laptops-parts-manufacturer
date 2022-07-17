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
        <div className="bg-[#42494f]">
            <h1 className="text-5xl text-bold text-white ml-2 border-b-4 border-blue-300 p-3 rounded-full flex">Reviews</h1>
            <div className="grid mt-4 ml-4 mr-4  mx-auto grid-cols-1 lg:grid-cols-3 gap-5">
            {
              reviews.map(review=><Review key={review._id} review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;