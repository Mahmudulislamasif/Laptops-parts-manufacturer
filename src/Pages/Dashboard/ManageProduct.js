import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const ManageProduct = () => {
    const [showOrders,setShowOrders]=useState([])
    useEffect(()=>{
     fetch('https://vast-badlands-64337.herokuapp.com/collectorder')
     .then(res=>res.json().stringify())
     .then(data=>setShowOrders(data))
    },[])
    if(showOrders.length===0)
    {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto p-3">
            <table class="table w-full">
                <thead>
                <tr>
                    <th className="bg-cyan-400">Serial</th>
                    <th className="bg-cyan-400">Email</th>
                    <th className="bg-cyan-400">Name</th>
                    <th className="bg-cyan-400">Total Price</th>
                    <th className="bg-cyan-400">State</th>
                </tr>
                </thead>
                <tbody>
                    {
                       showOrders.map((order,index)=> 
                       <tr key={order._id}>
                       <th className="bg-slate-100">{index+1}</th>
                       <td className="bg-slate-100">{order.email}</td>
                       <td className="bg-slate-100">{order.toolsName}</td>
                       <td className="bg-slate-100">{order.total}</td>
                        <td className="bg-slate-100">
                             {
                                order.paid && <p className="text-green-500">Paid</p>
                             }
                             {
                                !order.paid && <p className="text-red-600">Unpaid</p>
                             }
                        </td>
                       </tr>)
                    }

                </tbody>
            </table>
            </div>
    );
};

export default ManageProduct;