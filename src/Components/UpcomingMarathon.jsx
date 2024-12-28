import React from "react";
import { NavLink } from "react-router-dom";

const UpcomingMarathon = () => {
  const events = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLu2RuP7njeM2htd7Sgw0nDKD7Mhie5x7Og&s",
      title: "Winter Marathon 2024",
      location: "New York City",
      eventDate: "2024-01-15",
      regStartDate: "2024-01-01",
      description:
        "Join us for the Winter Marathon 2024! Experience the thrill of running through the beautiful streets of New York City.",
      category: "Running",
      comments: 12,
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcbYVpXCFuKFeXg_3j0ZufWpge0a4Csa4QQ&s",
      title: "Spring Sprint 2024",
      location: "San Francisco",
      eventDate: "2024-03-10",
      regStartDate: "2024-02-01",
      description:
        "Celebrate spring with our annual sprint event! Experience the joy of sprinting in the scenic beauty of San Francisco.",
      category: "Sprinting",
      comments: 8,
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_P28Oh506Gy9PRYOTcpQRVtUzG7ByE_-hyg&s",
      title: "Summer Run 2024",
      location: "Los Angeles",
      eventDate: "2024-06-20",
      regStartDate: "2024-05-15",
      description:
        "Get ready for the Summer Run 2024! Enjoy the sunshine and a great community of runners.",
      category: "Running",
      comments: 15,
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLJp4x2422ma5zIbJWAo4r4sbKdSb8eyYmw&s",
      title: "Autumn Dash 2024",
      location: "Seattle",
      eventDate: "2024-09-05",
      regStartDate: "2024-08-01",
      description:
        "Dash into autumn with this thrilling marathon event in the vibrant city of Seattle.",
      category: "Marathon",
      comments: 20,
    },
    {
      id: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUirvdW98GHVNBguNXlkMY9kom33AxYldZA&s",
      title: "City Marathon 2024",
      location: "Chicago",
      eventDate: "2024-11-10",
      regStartDate: "2024-10-01",
      description:
        "Experience the ultimate city run with thousands of participants in Chicago's City Marathon.",
      category: "Running",
      comments: 18,
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkBZWfO4lUYeBlGGEJVoGk-Dr3nEBgyqudg&s",
      title: "Holiday Hustle 2024",
      location: "Miami",
      eventDate: "2024-12-25",
      regStartDate: "2024-12-01",
      description:
        "Wrap up the year with a fun and festive marathon event in the lively city of Miami.",
      category: "Fun Run",
      comments: 25,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Upcoming Marathons
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((item) => (
          <div
            key={item.id}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-2 py-2 rounded">
                Event: {item.eventDate}
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
                Location: {item.location}
              </h3>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Registration Start: {item.regStartDate}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {item.description}
              </p>
              <button>
                <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                  See Details
                </button>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathon;
