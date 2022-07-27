import React from 'react';

const Contact = () => {
    return (
        <div id="#contact" className=' px-3 py-3 bg-[#42494f]'>
          <div className='text-center pb-14 text-white'>
            <p className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
              Contact Us
            </p>
            <h1 className='text-4xl'>Stay connected with us</h1>
          </div>
          <div className='grid grid-cols-1 justify-items-center gap-5'>
            <input
              type='text'
              placeholder='Email Address'
              className='input w-full max-w-md'
            />
            <input
              type='text'
              placeholder='Subject'
              className='input w-full max-w-md'
            />
            <textarea
              className='textarea w-full max-w-md'
              placeholder='Your message'
              rows={6}
            ></textarea>
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
    );
};

export default Contact;