import React from "react";

const UpcomingCard = () => {
  return (
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
          Registration Start :
          {new Date(item.startRegDate).toLocaleDateString("en-CA")}
        </h3>
        {/* <h3 className="text-sm font-semibold text-gray-800 mb-3">
              Registration End :{new Date(item.endRegDate).toLocaleDateString("en-CA")}
              </h3> */}

        <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
        <NavLink to={`details/${item._id}`}>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
            See Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default UpcomingCard;
