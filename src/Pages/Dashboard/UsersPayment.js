import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LEsflHJHSv6l9f6As7z1PGgyTCRy8bsurRQtXGyV8nFE1oCBYPJ4g7SMGaM13ocpHpfq30P1wtpkOqYmpPec7K400gctbnA0u');
const UsersPayment = () => {
    const {id}=useParams()
    const [payment,setPayment]=useState([])
    useEffect(()=>{
        const url=`https://vast-badlands-64337.herokuapp.com/booking/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPayment(data))
    },[id])
    return (
        <div>
            <div class="card w-50 bg-base-100 shadow-xl my-6 p-4">
                <div class="card-body">
                    <h2 class="card-title">Pay for {payment.toolsName}</h2>
                    <p>Price {payment?.total}</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm payment={payment}/>
                </Elements>
                </div>
                </div>
            </div>
    );
};

export default UsersPayment;