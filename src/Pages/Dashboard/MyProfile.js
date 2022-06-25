import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] =useAuthState(auth)
    const handleProfile=(event)=>{
        event.preventDefault()
        const profile={
         userEmail: user.email,
         userName: user.displayName,
         userEducation: event.target.education.value,
         userLocation: event.target.location.value,
         userPhone: event.target.phone.value,
         userLinkdin: event.target.linkdin.value
        }
        fetch(' https://vast-badlands-64337.herokuapp.com/profile', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify(profile)
          })
         .then(res => res.json())
         .then(data => {
             console.log(data)
             if(data)
             {
                 toast.success("Data Added Successfully")
             }
         });
     }
    return (
        <div>
            <form onSubmit={handleProfile}  className="flex flex-col w-1/2 mx-auto md:w-3/4 bg-slate-50 shadow-inner rounded-xl p-4">  
                     <input type="text" name="email" value={user?.email||''} readOnly disabled className="input input-bordered mb-2" />
                     <input type="text" name="name" value={user?.displayName||''} readOnly disabled  className="input input-bordered mb-2" />
                     <input type="text" name="location"  placeholder="location(city/district)" className="input input-bordered mb-2" required />
                     <input type="text" name="education"  placeholder="education" className="input input-bordered mb-2" required/>
                     <input type="text" name="phone" placeholder="phone" className="input input-bordered mb-2" required/>
                     <input type="text" name="linkdin" placeholder="Linkdin Profile Link" className="input input-bordered mb-2" />
                     <input  type="submit" value="Submit" className="btn btn-primary text-secondary" required/>
             </form>
             <ToastContainer/>
        </div>
    );
};

export default MyProfile;