import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold mt-4">
          Oops! Page Not Found.
        </h2>
        <p className="mt-2 text-lg">
          It seems the page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-white text-purple-500 font-bold rounded-full shadow-md hover:bg-purple-100 transition"
        >
          Back to Home
        </button>
      </div>
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/400x300?text=Error+Illustration"
          alt="Error Illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
