import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "../AuthProvider/AuthContext";
import Loading from "./Loading";

const Marathon = () => {
  const { loading } = useContext(contextApi);
  const [marathon, setMarathon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/marathon")
      .then((res) => res.json())
      .then((data) => {
        setMarathon(data);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="bg-gray-100 py-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-purple-500">OUR MARATHON</h1>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {marathon.map((item) => (
            <div
              key={item._id}
              className=" shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-2 py-2 rounded">
                  Event : {new Date(item.marathonStartDate).toLocaleDateString("en-CA")}
                </div>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-500 text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {item.comments} comments
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  Location : {item.location}
                </h3>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Registration Start :{new Date(item.startRegDate).toLocaleDateString("en-CA")}
                </h3>
                {/* <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Registration End :{new Date(item.endRegDate).toLocaleDateString("en-CA")}
                </h3> */}

                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.description}
                </p>
                <button
                  className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Marathon;
