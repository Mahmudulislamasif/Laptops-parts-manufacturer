import { itMatchesOne } from 'daisyui/src/lib/postcss-prefixer/utils';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Myorders = () => {
    const [user]=useAuthState(auth)
    const [myitems,setMyitems]=useState([])
    
    useEffect(()=>{
        const email=user?.email;
        const url=`https://vast-badlands-64337.herokuapp.com/booking?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMyitems(data))
},[user])
    return (
        <div class="overflow-x-auto p-4">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Total Price</th>
                    <th>Pay</th>
                </tr>
                </thead>
                <tbody>
                    {
                       myitems.map((myitem,index)=> 
                       <tr key={myitem._id}>
                       <th>{index+1}</th>
                       <td>{myitem.email}</td>
                       <td>{myitem.toolsName}</td>
                       <td>{myitem.total}</td>
                       <td>
                        {
                           !myitem.paid && <Link to={`/dashboard/payment/${myitem._id}`}><button className="btn btn-xs btn-success">pay</button></Link>
                        }
                            {myitem.paid && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{myitem.transactionId}</span></p>
                                    </div>}
                       </td>
                       </tr>)
                    }

                </tbody>
            </table>
            </div>
    );
};

export default Myorders;