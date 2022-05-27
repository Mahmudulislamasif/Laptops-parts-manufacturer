import React from 'react';
import image from '../asset/parts.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-pink-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <figure><img src={image} className="rounded-lg shadow-2xl" alt='' /></figure>
          <div>
            <h1 className="text-3xl font-bold">Best Laptop parts available here</h1>
            <p className="py-6"></p>
            <button className="btn btn-primary text-secondary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;