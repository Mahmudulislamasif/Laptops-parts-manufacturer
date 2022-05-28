import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import expert from '../asset/expert.jpg'
const Expert = () => {
    return (
     <div>
         <h1 className="text-5xl text-purple-500">Features</h1>
        <div class="hero min-h-screen bg-slate-200">
        <div class="hero-content flex-col lg:flex-row">
            <img src={expert} class="rounded-lg shadow-2xl" alt=''/>
            <div className="flex-col">
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2">User can see their favourite product</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2">User can see details info about product</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2">They can select quantity which they want</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2">They can see their order products</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2">They can pay though online</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2">They also give some important review about website</p>
            </div>
            
            
            </div>

        </div>
        </div>
     </div>
    );
};

export default Expert;