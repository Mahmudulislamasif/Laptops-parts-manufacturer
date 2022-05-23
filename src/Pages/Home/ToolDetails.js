import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderPage from './OrderPage';

const ToolDetails = () => {
    const {id}=useParams()
    const [tool,setTool]=useState({})
    const [user] = useAuthState(auth)
    useEffect(()=>{
        const url=`http://localhost:5000/purchase/${id}`
        fetch(url)
        .then(res=>res.json()) 
        .then(data=>setTool(data))
    })
    const handleBuy=(event)=>{
        event.preventDefault()
        const buy = {
            toolsId: tool._id,
            toolsName: tool.name,
            email: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
    }

    return (
        <div className="flex lg:h-screen justify-center items-center">
            <div class="card shadow-xl">
            <figure><img src={tool.image} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{tool.name}</h2>
                <h2 class="">{tool.price}</h2>
                <div class="card-actions justify-end">
                <>
                 <label for="my-modal" class="btn modal-button">open modal</label>
                        <input type="checkbox" id="my-modal" class="modal-toggle" />
                        <div class="modal">
                        <div class="modal-box">
                        <div class="modal-action">
                            <label for="my-modal" class="btn">X</label>
                        </div>
                    <form onSubmit={handleBuy} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                     
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required/>
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" required/>
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" required/>
                    </form>
                      
                        </div>
                </div>
                      
                    </>
                </div>
            </div>
            </div>
       </div>

    );
};

export default ToolDetails;