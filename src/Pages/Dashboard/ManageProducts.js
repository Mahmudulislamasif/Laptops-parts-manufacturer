import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [tools,setTools]=useState([])
    useEffect(()=>{
     fetch('https://vast-badlands-64337.herokuapp.com/tools')
     .then(res=>res.json())
     .then(data=>setTools(data))
    },[])
    if(tools.length===0)
    {
        return <Loading></Loading>
    }
    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure to delete items?')
        if(proceed)
        { 
            fetch(`https://agile-brushlands-55517.herokuapp.com/tools/${id}`,
            {
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining=tools.filter(item=>item._id!==id)
                setTools(remaining)
            })
        }
    }
    return (
        <div class="overflow-x-auto">
        <table class="table w-full">
            <thead>
            <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                {
                   tools.map((tool,index)=> 
                   <tr key={tool._id}>
                   <th>{index+1}</th>
                   <td><img className="w-10" src={tool.image} alt=''></img></td>
                   <td>{tool.name}</td>
                   <td>{tool.price}</td>
                   <td>
                                    <button onClick={()=>handleDelete(tool._id)}>
                                    <FontAwesomeIcon className="bg-red-400 p-2 border-2" icon={faTrashAlt}></FontAwesomeIcon></button>
                                </td>
                   </tr>)
                }

            </tbody>
        </table>
        </div>
    );
};

export default ManageProducts;