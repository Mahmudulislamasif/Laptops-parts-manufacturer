import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [users,getUser]=useState([])
    useEffect(()=>{
        fetch(' https://vast-badlands-64337.herokuapp.com/user')
        .then(res=>res.json())
        .then(data=>getUser(data))
    },[])
    if(users.length===0)
    {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto p-3">
            <table class="table w-full">
                <thead>
                <tr>
                    <th className="bg-cyan-400"></th>
                    <th className="bg-cyan-400">Email</th>
                    <th className="bg-cyan-400">Admin</th>
                    <th className="bg-cyan-400">Delete</th>
                </tr>
                </thead>
                <tbody>
                    {
                       users.map((user,index)=><UserRow key={user._id} index={index} user={user}></UserRow>)
                    }

                </tbody>
            </table>
            </div>
    );
};

export default Users;