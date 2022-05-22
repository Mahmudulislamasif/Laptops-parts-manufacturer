import React from 'react';

const Tool = ({tool}) => {
    const {name,image,description,minimum,available,price}=tool
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
            <img src={image} alt="" />
        </figure>
        <div className="card-body bg-slate-600 text-white">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <p className="text-left">Minimun Order Quantity: {minimum}</p>
            <p className="text-left">Available Quantity: {available}</p>
            <p className="text-left">Price: {price}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary mx-auto">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default Tool;