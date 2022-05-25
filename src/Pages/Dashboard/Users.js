import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const Users = () => {
    const [users,getUser]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>getUser(data))
    },[])
   
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                       users.map(user=><UserRow key={user._id} user={user}></UserRow>)
                    }

                </tbody>
            </table>
            </div>
    );
};

export default Users;