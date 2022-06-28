import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToolDetails = () => {
    const {id}=useParams()
    const [tool,setTool]=useState({})
    const [user] = useAuthState(auth)
    useEffect(()=>{
        const url=` https://vast-badlands-64337.herokuapp.com/purchase/${id}`
        fetch(url)
        .then(res=>res.json()) 
        .then(data=>setTool(data))
    })
    const handleBuy=(event)=>{
        event.preventDefault()
        const total=parseFloat(event.target.price.value)*parseFloat(event.target.quantity.value);
        const buy = {
            toolsId: tool._id,
            toolsName: tool.name,
            email: user.email,
            quantity:event.target.quantity.value,
            price:event.target.price.value,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value,
            total:total
        }
        fetch(' https://vast-badlands-64337.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buy)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Order recorded succesfully')
                
            });
    }
   
    return (
      <div className="bg-slate-800 p-3">
          <div className="lg:w-1/2 mx-auto bg-slate-200 rounded-xl">
            <div class="card shadow-xl p-3">
            <figure><img className=" rounded-lg border-2 border-orange-500 " src={tool.image} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title border-black border-b-2 ">{tool.name}</h2>
                <h2 class="text-left text-black flex justify-between"><span className="font-bold">Price:</span>${tool.price}</h2>
                <h2 class=" text-black text-justify flex justify-between"><span className="font-bold">Description:</span>{tool.description}</h2>
                <h2 class="text-left text-black flex justify-between"><span className="font-bold">Minimum:</span>{tool.minimum}</h2>
                <h2 class="text-left text-black flex justify-between"><span className="font-bold">Available:</span>{tool.available}</h2>
                <div class="card-actions justify-end">
                <>
                 <label for="my-modal" class="btn border-0 mx-auto w-1/2 bg-orange-500 hover:bg-orange-500 text-black">Order Now</label>
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
                        <input type="number" name="quantity" placeholder="Quantity" min={tool.minimum} max={tool.available} className="input input-bordered w-full max-w-xs" required/>
                        <input type="number" name="price" disabled value={tool?.price} className="input input-bordered w-full max-w-xs" required/>
                        <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-xs" required/>
                        <input type="submit" value="Submit" className="btn text-secondary btn-primary w-full max-w-xs" required/>
                    </form> 
                    <ToastContainer/>
                        </div>
                </div>
                      
                    </>
                </div>
            </div>
            </div>
       </div>
      </div>

    );
};

export default ToolDetails;