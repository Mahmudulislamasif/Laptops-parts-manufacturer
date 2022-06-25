import React from 'react';

const UserRow = ({user,index}) => {
    const {email,role}=user;
    const makeAdmin=()=>{
        fetch(` https://vast-badlands-64337.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
               <tr>
                       <th className="bg-slate-100">{index+1}</th>
                       <td className="bg-slate-100">{email}</td>
                       <td className="bg-slate-100">{role!=='admin' && <button onClick={makeAdmin} className="btn bg-green-300 hover:bg-green-300 text-black border-0 btn-xs">Make Admin</button>}</td>
                       <td className="bg-slate-100"><button className="btn bg-red-500 hover:bg-red-500 text-black border-0 btn-xs ">Remove user</button></td>
                </tr>
    );
};

export default UserRow;