import React from 'react';

const AddReview = () => {
    const handleComment=(event)=>{
       event.preventDefault()
       const comment={
        commentDescription: event.target.comment.value,
       }
       fetch('http://localhost:5000/comments', {
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
             <form onSubmit={handleComment}  className='grid grid-cols-1 gap-3 justify-items-center mt-2'>  
                     <textarea type="text" name="comment"  className="input input-bordered w-full max-w-xs" />
                     <input type="submit" value="Submit" className="btn btn-primary text-secondary w-full max-w-xs" required/>
                 </form>
        </div>
    );
};

export default AddReview;