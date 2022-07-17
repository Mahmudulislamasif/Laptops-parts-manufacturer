import { faDesktop, faFlag, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const BusinessSummary = () => {
    return (
       <div className="bg-[#42494f]">
          <h1 className="text-5xl text-bold text-white ml-2 border-b-4 border-blue-300 p-3 rounded-full flex">Business Summary</h1>
         <div class="stats shadow my-8 py-6 stats-vertical lg:stats-horizontal">
        <div class="stat">
          <div class="stat-figure text-secondary">
            <figure><FontAwesomeIcon className="text-purple-600 text-5xl" icon={faFlag}></FontAwesomeIcon></figure>
          </div>
          <div class="stat-title">Countries</div>
          <div class="stat-value">50+</div>
          
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary">
          <figure><FontAwesomeIcon className="text-purple-600 text-5xl" icon={faDesktop}></FontAwesomeIcon></figure>
          </div>
          <div class="stat-title">Projects</div>
          <div class="stat-value">100+</div>
   
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
          <figure><FontAwesomeIcon className="text-purple-600 text-5xl" icon={faPeopleGroup}></FontAwesomeIcon></figure>
          </div>
          <div class="stat-title">New Registers</div>
          <div class="stat-value">5,200</div>
          
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary">
          <figure><FontAwesomeIcon className="text-purple-600 text-5xl" icon={faThumbsUp}></FontAwesomeIcon></figure>
          </div>
          <div class="stat-title">Happy Clients</div>
          <div class="stat-value">1000+</div>
          
        </div>
        
        </div>
       </div>
    );
};

export default BusinessSummary;