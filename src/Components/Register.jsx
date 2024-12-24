import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { contextApi } from "../AuthProvider/AuthContext";

const Register = () => {
    const {createUser,setUser,handleGoogleLogin} = useContext(contextApi);
    const [toggle, setToggle] = useState(false);
    const handleToggle = ()=> {
      setToggle(!toggle);
    }
    const navigate = useNavigate()
    const location = useLocation()

    // password validation
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

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
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(!regex.test(password)){
            Swal.fire({
                title: "Sorry!",
                text: "Password must be at least 6 characters long, include an uppercase letter, and a lowercase letter.",
                icon: "error"
              });
            return;
        }
        
        createUser(email,password)
        .then(result => {
            setUser(result.user)
            Swal.fire({
                title: "Success!",
                text: "Your Registration Successfull",
                icon: "success"
              });
              form.reset();
            //   navigate(location?.state? location.state:'/');
        })
        .catch(err => {
          Swal.fire({
            title: "Sorry!",
            text: "Your Registration Failed",
            icon: "error"
          });
        })
    }
  return (
    <div className="flex px-4 mt-[68px] min-h-screen md:px-0 justify-center items-center my-5 py-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            htmlFor="imageURL"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            name="photo"
            placeholder="Enter your image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4 w-full relative">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={toggle ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-8 text-gray-500"
            onClick={handleToggle}
          >
            {toggle ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
          </button>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </div>

        <button
          onClick={handleGoggle}
          type="submit"
          className="btn mt-5 btn-warning w-full text-black"
        >
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <NavLink
              to={"/login"}
              type="button"
              className="text-blue-500 hover:underline"
            >
              Log In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
