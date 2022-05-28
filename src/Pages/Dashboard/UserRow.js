import React from 'react';

const UserRow = ({user}) => {
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
                       <th>1</th>
                       <td>{email}</td>
                       <td>{role!=='admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                       <td><button className="btn btn-xs">Remove user</button></td>
                </tr>
    );
};

export default UserRow;