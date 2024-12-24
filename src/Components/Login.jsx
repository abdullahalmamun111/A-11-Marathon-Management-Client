import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { contextApi } from "../AuthProvider/AuthContext";

const Login = () => {
    const {handleSignIn,handleGoogleLogin,setUser} = useContext(contextApi);
    const location = useLocation();
    const navigate = useNavigate();

    // google sign in
    const handleGoggle = ()=> {
        handleGoogleLogin()
        .then(result => {
            setUser(result.user)
            Swal.fire({
                title: "Success!",
                text: "Login Successfull",
                icon: "success"
              });
            navigate(location?.state? location.state:'/');
        })
        .catch(err => {
            Swal.fire({
                title: "Failed!",
                text: "Login Failed",
                icon: "error"
              });
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        handleSignIn(email,password)
        .then(result => {
            setUser(result.user)
            Swal.fire({
                title: "Success!",
                text: "Succesfully Logged In",
                icon: "success"
              });
              navigate(location?.state? location.state:'/');
            
        })
        .catch(err => {
            Swal.fire({
                title: "Sorry!",
                text: "Failed To Logged In ,Please Input Correct Information For Log In",
                icon: "error"
              });
        })
    }
  return (
    <div className="my-5 flex mt-[68px] min-h-screen px-4 md:px-0 items-center justify-center ">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg my-5">
        <h1 className="text-2xl font-bold text-center mb-6">Login Page</h1>
        <form onSubmit={handleSubmit } className="space-y-4">
          {/* Email Field */}
          <div className="form-control w-full">
            <label htmlFor="email" className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="form-control w-full relative">
            <label htmlFor="password" className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>


          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-full text-white">
            Login
          </button>

          
        </form>

        {/* login with google */}

        <button
            onClick={handleGoggle}
            type="submit"
            className="btn mt-5 btn-warning w-full text-black"
          >
            <FaGoogle></FaGoogle>
            Login With Google
          </button>

        {/* Register Link */}
        <div className="text-center mt-4">
          <p className="text-sm">
            Don’t have an account?{" "}
            <NavLink
              to={"/register"}
              type="button"
              className="text-blue-500 hover:underline"
            >
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
