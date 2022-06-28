import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51LEsflHJHSv6l9f6As7z1PGgyTCRy8bsurRQtXGyV8nFE1oCBYPJ4g7SMGaM13ocpHpfq30P1wtpkOqYmpPec7K400gctbnA0u');
const UsersPayment = () => {
    const {id}=useParams()
    const [payment,setPayment]=useState([])
    const [user] = useAuthState(auth)
    useEffect(()=>{
        const url=`https://vast-badlands-64337.herokuapp.com/booking/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPayment(data))
    },[id])
    return (
        <div>
            <div class="card w-1/2 bg-gradient-to-r from-blue-500 to-cyan-500  text-white shadow-xl mx-auto mb-3 p-4">
                <div class="card-body">
                    <h2 class="card-title">Hello {user?.displayName}</h2>
                    <h2 class="card-title">Please pay for {payment.toolsName}</h2>
                    <p className="text-left">Price: {payment?.total} $</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
                </div>
                <div class="card shadow-2xl w-1/2 bg-slate-100 mx-auto">
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