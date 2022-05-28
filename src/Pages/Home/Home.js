import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Expert from './Expert';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Tools></Tools>
           <BusinessSummary></BusinessSummary>
           <Expert></Expert>
           <Reviews></Reviews>
           <Contact></Contact>
           
        </div>
    );
};

export default Home;