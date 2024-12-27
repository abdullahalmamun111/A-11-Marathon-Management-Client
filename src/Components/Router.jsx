import React, { useEffect } from 'react';
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
import Details from '../Pages/Details';
import RegistrationPage from '../Pages/RegistrationPage';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([

    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path:'details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/marathon/${params.id}`)
            },
            {
                path:'marathons/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/marathon/${params.id}`)
            },
            {
                path:'registration/:id',
                element: <PrivateRoute><RegistrationPage></RegistrationPage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/marathon/${params.id}`)
            }
        ]
    }
])

export default router;