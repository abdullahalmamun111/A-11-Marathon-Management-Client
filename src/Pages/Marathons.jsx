import React from "react";
import { Link } from "react-router-dom";

const MarathonCard = ({ item }) => {
  const {
    _id,
    title,
    image,
    location,
    marathonStartDate,
    distance,
  } = item;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-purple-500 text-white text-sm font-bold px-2 py-1 rounded">
          {new Date(marathonStartDate).toLocaleDateString("en-CA")}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          <span className="font-semibold text-purple-500">Location:</span>{" "}
          {location}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-semibold text-purple-500">Distance:</span>{" "}
          {distance}
        </p>
        <Link
          to={`/details/${_id}`}
          className="mt-4 block bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300 text-center"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default MarathonCard;
