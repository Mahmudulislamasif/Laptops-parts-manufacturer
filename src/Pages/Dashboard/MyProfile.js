import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] =useAuthState(auth)
    return (
        <div>
            <form  className='grid grid-cols-1 gap-3 justify-items-center mt-2'>  
                     <input type="text" name="email" value={user.email} readOnly disabled className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="name" value={user.displayName} readOnly disabled  className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="education" placeholder="education" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="location" placeholder="location(city/district)" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="phone" placeholder="phone" className="input input-bordered w-full max-w-xs" />
                     <input type="text" name="linkdin" placeholder="Linkdin Profile Link" className="input input-bordered w-full max-w-xs" />
                     <input type="submit" value="Submit" className="btn btn-primary text-secondary w-full max-w-xs" required/>
             </form>
        </div>
    );
};

export default MyProfile;