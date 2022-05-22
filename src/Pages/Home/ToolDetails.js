import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolDetails = () => {
    const {id}=useParams()
    const [tool,setTool]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/purchase/${id}`
        fetch(url)
        .then(res=>res.json()) 
        .then(data=>setTool(data))
    })
    return (
        <div>
            <h1>{tool._id}</h1>
        </div>
    );
};

export default ToolDetails;