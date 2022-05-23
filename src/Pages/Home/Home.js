import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <BusinessSummary></BusinessSummary>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;