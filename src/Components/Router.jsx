import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Pages/MainLayout';
import Register from './Register';
import Login from './Login';
import Marathons from '../Pages/Marathons';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Demo from './Demo';
import PrivateRoute from './PrivateRoute';
import AddMarathon from './AddMarathon';

const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <h1>Page NOt Found</h1>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'marathons',
                element:<Marathons></Marathons>
            },
            {
                path:'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path:'dashboard/addmarathon',
                element: <PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>
            }
        ]
    }
])

export default router;