import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
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
    return (
        <div className="bg-[#42494f]">
            <h1 className="text-5xl text-bold text-white ml-2 border-b-4 border-blue-300 p-3 rounded-full flex">Tools</h1>
            <div className="grid mt-4 ml-4 mr-4 grid-cols-1 lg:grid-cols-3 gap-4">
            {
              tools.slice(0,6).map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;