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
        <div>
            <h1 className="text-5xl mt-2 text-purple-700 tex-bold">Tools</h1>
            <div className="grid m-4 grid-cols-1 lg:grid-cols-3 gap-4">
            {
              tools.slice(0,6).map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;