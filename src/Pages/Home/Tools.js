import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools,setTools]=useState([])
    useEffect(()=>{
     fetch('tools.json')
     .then(res=>res.json())
     .then(data=>setTools(data))
    },[])
    return (
        <div className>
            <h1 className="text-5xl text-purple-700">Tools</h1>
            <div className="grid mx-auto grid-cols-1 lg:grid-cols-3 gap-5">
            {
              tools.map(tool=><Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default Tools;