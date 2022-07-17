import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import expert from '../asset/expert.jpg'
const Expert = () => {
    return (
     <div className="bg-[#42494f]">
         <h1 className="text-5xl text-bold text-white ml-2 border-b-4 border-blue-300 p-3 rounded-full flex">Features</h1>
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
            <img src={expert} class="rounded-full shadow-2xl" alt=''/>
            <div className="flex-col">
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 rounded-full p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2 text-white">User can see their favourite product</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 rounded-full p-1" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2 text-white">User can see details info about product</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1 rounded-full" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2 text-white">They can select quantity which they want</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1 rounded-full" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2 text-white">They can see their order products</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1 rounded-full" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2 text-white">They can pay though online</p>
            </div>
            <div className="flex">
              <p class="py-2 mr-1"><FontAwesomeIcon className="bg-green-300 border-r-2 p-1 rounded-full" icon={faCheck}></FontAwesomeIcon></p>
              <p class="py-2 text-white">They also give some important review about website</p>
            </div>
            
            
            </div>

        </div>
        </div>
     </div>
    );
};

export default Expert;