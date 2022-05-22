import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id,name,image,description,minimum,available,price}=tool
    const navigate=useNavigate();
    const navigateToToolDetails=(id)=>{
      navigate(`/purchase/${id}`)
    }
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
            <img src={image} alt="" />
        </figure>
        <div className="card-body bg-slate-600 text-white">
            <h2 className="card-title">{name}</h2>
            <p className="text-left">{description}</p>
            <p className="text-left">Minimun Order Quantity: {minimum}</p>
            <p className="text-left">Available Quantity: {available}</p>
            <p className="text-left">Price: {price}</p>
            <div className="card-actions justify-end">
            <button onClick={()=>navigateToToolDetails(_id)} className="btn btn-primary mx-auto">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Tool;