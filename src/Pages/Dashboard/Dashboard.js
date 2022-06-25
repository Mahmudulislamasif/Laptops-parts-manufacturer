import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const[user]=useAuthState(auth)
    const [admin]=useAdmin(user)

    return (
        <div>
            <div class="drawer drawer-mobile bg-slate-800">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl py-4 font-bold text-white'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-[#454545] text-white ">
                   
                    {
                    admin ? 
                    <>
                    <li><Link to="/dashboard/users">Users</Link></li>
                    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    <li><Link to="/dashboard/manageproduct">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/manageproducts">Manage All Products</Link></li>
                    </>
                    :
                    <>
                    <li><Link to="/dashboard" className="hover:bg-pink-500">My Orders</Link></li>
                    <li><Link to="/dashboard/review" className="hover:bg-pink-500">My Reviews</Link></li>
                    <li><Link to="/dashboard/myprofile" className="hover:bg-pink-500">My Profile</Link></li>
                    </>
                    
                    }
                </ul>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;