
import React from 'react';
import image from '../asset/parts.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#42494f] text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
       
          <figure><img src={image} className="rounded-lg shadow-2xl scale-75" alt='' /></figure>
          <div className="text-left">
            <h1 className="text-3xl font-bold py-4">Best Laptop parts available here</h1>
            <button className="btn btn-primary text-secondary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;