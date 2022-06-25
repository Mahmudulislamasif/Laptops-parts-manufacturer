import React from 'react';

const AddReview = () => {
    const handleComment=(event)=>{
       event.preventDefault()
       const comment={
        commentDescription: event.target.comment.value,
        ratings: event.target.ratings.value,
       }
       fetch('https://vast-badlands-64337.herokuapp.com/comments', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(comment)
         })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
    }
    return (
        <div>
             <form onSubmit={handleComment}  className="flex flex-col w-1/2 mx-auto md:w-3/4 bg-slate-50 shadow-inner rounded-xl p-4">  
                     <textarea type="text" name="comment"  placeholder="Write review here" className="input input-bordered " />
                     <input type="number" name="ratings" max="5" min="1" placeholder="Rating"  className="input input-bordered "  step="any" />
                     <input type="submit" value="Submit" className="btn btn-primary text-secondary" required/>
             </form>
        </div>
    );
};

export default AddReview;