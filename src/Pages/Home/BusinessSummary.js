import { faDesktop, faFlag, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const BusinessSummary = () => {
    return (
        <div>
             <h1 className="text-5xl text-purple-700 mt-4 mb-3">Business Summary</h1>
             <div className="m-5 bg-slate-100">
             <div className='grid mx-auto grid-cols-1 lg:grid-cols-4 gap-5'>
            <div className="mt-2 card">
                <figure><FontAwesomeIcon className="text-9xl text-primary" icon={faFlag}></FontAwesomeIcon></figure>
                <div className="card-body">
                    <h2 className="text-center text-black text-4xl">50</h2>
                    <p className="text-3xl">Countries</p>      
                </div>
                </div>
                <div className="mt-2 card">
                <figure><FontAwesomeIcon className="text-9xl text-primary" icon={faDesktop}></FontAwesomeIcon></figure>
                <div className="card-body text-white">
                    <h2 className="text-center text-black text-4xl">500+</h2>
                    <h2 className="text-center text-black text-3xl">Country</h2>
                </div>
                </div>
                <div className="card">
                <figure><FontAwesomeIcon className="text-9xl text-primary" icon={faPeopleGroup}></FontAwesomeIcon></figure>
                <div className="card-body text-white">
                    <h2 className="text-center text-black text-4xl">272+</h2>
                    <p className="text-center text-black text-3xl">Happy Clients</p>
                </div>
                </div>
                <div className="card">
                <figure><FontAwesomeIcon className="text-9xl text-primary"  icon={faThumbsUp}></FontAwesomeIcon></figure>
                <div className="card-body text-white">
                    <h2 className="text-center text-black text-4xl" >605+</h2>
                    <p className="text-center text-black text-3xl">Feedback</p>
                </div>
                </div>
            </div>  
             </div> 
        </div>
    );
};

export default BusinessSummary;