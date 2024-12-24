import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Pages/MainLayout';
import Register from './Register';
import Login from './Login';

const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        // errorElement: <h1>Page NOt Found</h1>,
        children:[
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'login',
                element:<Login></Login>
            }
        ]
    }
])

export default router;