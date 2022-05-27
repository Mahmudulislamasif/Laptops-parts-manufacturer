import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <BusinessSummary></BusinessSummary>
           <Reviews></Reviews>
           <Contact></Contact>
        </div>
    );
};

export default Home;