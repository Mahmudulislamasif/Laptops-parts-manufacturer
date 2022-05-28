import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const ManageProduct = () => {
    const [showOrders,setShowOrders]=useState([])
    useEffect(()=>{
     fetch('https://vast-badlands-64337.herokuapp.com/collectorder')
     .then(res=>res.json())
     .then(data=>setShowOrders(data))
    },[])
    if(showOrders.length===0)
    {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody>
                    {
                       showOrders.map((order,index)=> 
                       <tr key={order._id}>
                       <th>{index+1}</th>
                       <td>{order.email}</td>
                       <td>{order.toolsName}</td>
                       <td>{order.total}</td>
                       </tr>)
                    }

                </tbody>
            </table>
            </div>
    );
};

export default ManageProduct;