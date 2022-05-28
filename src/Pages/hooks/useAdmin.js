
import { useEffect, useState } from 'react';
const useAdmin=user=>{
    const [admin,setAdmin]=useState(false)
    useEffect(()=>{
    const email=user?.email;
    if(email)
    {
           fetch(` https://vast-badlands-64337.herokuapp.com/admin/${email}`)
           .then(res=>res.json())
           .then(data=>setAdmin(data.admin))
    }
    },[user])
    return [admin]
}
export default useAdmin;