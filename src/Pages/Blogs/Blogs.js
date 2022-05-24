import React from 'react';

const Blogs = () => {
    return (
        <div className="mx-auto">
            
            <div className="grid gap-5 m-4 grid-cols-1 lg:grid-cols-2">
            <div class="card bg-base-100 shadow-xl text-left">
            <div class="card-body">
                <h2 class="card-title">How will you improve the performance of a React Application?</h2>
                <ol className='list-decimal'>
                    <li>Creating different components for different webpage</li>
                    <li>Reducing repetiton of react code</li>
                    <li>Optimizing images for different web page</li>
                    <li>Keeping component state local where necessary</li>
                    <li>Using more dependencies from one page to another</li>
                </ol>
            </div>
            </div>
            <div class="card  bg-base-100 shadow-xl text-left">
            <div class="card-body">
                <h1 className='card-title'>What are the different ways to manage a state in a React application?</h1>
                <h1>There are four main types of state need to properly manage in React apps:</h1>
                <ol className='list-decimal'>
                    <li>Local State: Which is mainly used to change state in fronted side.</li>
                    <li>Global State: Global state is mainly used to handle user state which comes from login or registration.</li>
                    <li>Server State: Which is mainly used to change state in backend side</li>
                </ol>
            </div>
            </div>
            <div class="card bg-base-100 shadow-xl text-left">
            <div class="card-body">
                <h2 class="card-title"> How does prototypical inheritance work?</h2>
                <p>Prototypical inheritance is a property used in javascript. It is mainly working with object instance. It is a method by which an object can inherit the properties and method of other object.</p>
            </div>
            </div>
            <div class="card bg-base-100 shadow-xl text-left">
            <div class="card-body">
                <h2 class="card-title">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>There are many functionalities use in mongoDb.mongoDB is mainly used for CRUD operation like read data, post data, update and delete data. If we want to find products by name then we have to use get functionalities from mongoDb. Then we search it by name by sending parameters name from API.</p>
            </div>
            </div>
            <div class="card bg-base-100 shadow-xl text-left">
            <div class="card-body">
                <h2 class="card-title">What is a unit test? Why should write unit tests?</h2>
                <p>Unit test is nothing but test code in smallest part. It is used for devloping purpose.Developers write unit tests for their code to make sure that the code works correctly or not.</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;