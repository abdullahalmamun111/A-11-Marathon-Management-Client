import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Router.jsx'
import AuthContext from './AuthProvider/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
    <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </StrictMode>,
)
