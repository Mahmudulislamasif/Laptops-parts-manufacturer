import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6"></p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;