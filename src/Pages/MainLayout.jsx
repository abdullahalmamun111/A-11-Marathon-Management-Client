import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
             <div className='h-[60vh]'><Outlet></Outlet></div>
             <div><Footer></Footer></div>
        </div>
    );
};

export default MainLayout;