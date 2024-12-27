import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Details = () => {
  const navigate = useNavigate();
  const detailsData = useLoaderData();

  const {
    _id,
    title,
    location,
    distance,
    description,
    image,
    startRegDate,
    endRegDate,
    marathonStartDate,
    createdAt,
    registrationCount,
  } = detailsData;

  // Calculate the remaining time until the marathon
  const marathonStartTime = new Date(marathonStartDate).getTime();
  const currentTime = new Date().getTime();
  const remainingTimeInSeconds = Math.max((marathonStartTime - currentTime) / 1000, 0);
  
  return (
    <div className="bg-gradient-to-r from-purple-300 via-blue-200 to-pink-300 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className=" w-[40%] rounded-xl mt-5 mx-auto h-64 object-cover object-center"
          />

          <div className="p-6">
            <h1 className="text-4xl font-bold text-purple-600 mb-4">{title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="text-lg text-gray-700">
                <p>
                  <span className="font-semibold text-purple-500">Location:</span> {location}
                </p>
                <p>
                  <span className="font-semibold text-purple-500">Distance:</span> {distance} km
                </p>
                <p>
                  <span className="font-semibold text-purple-500">Registration Starts:</span> {new Date(startRegDate).toLocaleDateString("en-CA")}
                </p>
                <p>
                  <span className="font-semibold text-purple-500">Registration Ends:</span> {new Date(endRegDate).toLocaleDateString("en-CA")}
                </p>
              </div>

              <div className="text-lg text-gray-700">
                <p>
                  <span className="font-semibold text-purple-500">Marathon Date:</span> {new Date(marathonStartDate).toLocaleDateString("en-CA")}
                </p>
                <p>
                  <span className="font-semibold text-purple-500">Created At:</span> {new Date(createdAt).toLocaleDateString("en-CA")}
                </p>
                <p>
                  <span className="font-semibold text-purple-500">Registrations:</span> {registrationCount} People
                </p>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4">Countdown to Marathon</h2>
             <div className="flex justify-center items-center">
             <CountdownCircleTimer
                isPlaying
                duration={remainingTimeInSeconds}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[7 * 24 * 60 * 60, 3 * 24 * 60 * 60, 1 * 24 * 60 * 60, 0]}
                size={200}
                trailColor="#d9d9d9"
                onComplete={() => {
                  return { shouldRepeat: false };
                }}
              >
                {({ remainingTime }) => {
                  const days = Math.floor(remainingTime / (24 * 60 * 60));
                  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
                  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);

                  return (
                    <div>
                      <div className="text-2xl font-bold">{days}d {hours}h {minutes}m</div>
                      <div className="text-sm text-gray-600">Time Left</div>
                    </div>
                  );
                }}
              </CountdownCircleTimer>
             </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-purple-600 mb-2">Description</h2>
              <p className="text-gray-700 text-base leading-relaxed">{description}</p>
            </div>

            <Link to={`/registration/${_id}`}>
              <button
                className="w-full bg-purple-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition-colors duration-300"
              >
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
