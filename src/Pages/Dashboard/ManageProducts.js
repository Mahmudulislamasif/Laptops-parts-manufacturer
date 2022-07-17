import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const [tools,setTools]=useState([])
    useEffect(()=>{
     fetch(`https://vast-badlands-64337.herokuapp.com/tools`)
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
            fetch(`https://vast-badlands-64337.herokuapp.com/tools/${id}`,
            {
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=tools.filter(item=>item._id!==id)
                setTools(remaining)
            })
        }
    }
    return (
        <div class="overflow-x-auto p-3">
        <table class="table w-full">
            <thead>
            <tr>
                <th className="bg-cyan-400">Serial</th>
                <th className="bg-cyan-400">Image</th>
                <th className="bg-cyan-400">Name</th>
                <th className="bg-cyan-400">Price</th>
                <th className="bg-cyan-400">Delete</th>
            </tr>
            </thead>
            <tbody>
                {
                   tools.map((tool,index)=> 
                   <tr key={tool._id}>
                   <th className="bg-slate-100">{index+1}</th>
                   <td className="bg-slate-100"><img className="w-10 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-1"  src={tool.image} alt=''></img></td>
                   <td className="bg-slate-100">{tool.name}</td>
                   <td className="bg-slate-100">{tool.price}</td>
                   <td className="bg-slate-100">
                                <button onClick={()=>handleDelete(tool._id)}>
                                    <FontAwesomeIcon className="bg-red-400 p-2 border-2" icon={faTrashAlt}></FontAwesomeIcon>
                                </button>
                                </td>
                   </tr>)
                }

            </tbody>
        </table>
        </div>
    );
};

export default ManageProducts;