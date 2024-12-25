import React, { useContext, useState } from "react";
import { contextApi } from "../AuthProvider/AuthContext";
import { useParams, useNavigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const RegistrationPage = () => {
  const loadedData = useLoaderData();

  const { title, marathonStartDate, _id } = loadedData;

  //   {
  //     "_id": "676b67a103ee0b8017ecfb84",
  //     "title": "New York City Marathon",
  //     "location": "New York",
  //     "distance": "25k",
  //     "description": "This is one of the largest marathons in the world, held annually on the first Sunday of November. Runners cross five boroughs of New York City, with a challenging route and an enthusiastic crowd cheering them on.",
  //     "image": "data:image/jpeg;base64,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",
  //     "startRegDate": "2024-12-25T18:00:00.000Z",
  //     "endRegDate": "2025-01-22T18:00:00.000Z",
  //     "marathonStartDate": "2025-02-11T18:00:00.000Z",
  //     "createdAt": "2024-12-25T02:02:09.927Z",
  //     "registrationCount": 0
  // }

  console.log(loadedData);
  const { user } = useContext(contextApi); // For auto-filled email
  const { marathonId, startDate } = useParams(); // For marathon-specific data
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    additionalInfo: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registrationData = {
      ...formData,
      marathonId,
      marathonTitle: title,
      marathonStartDate: startDate,
      marathon_id: _id
    };

    fetch("http://localhost:5000/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Registration Successfull",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Registration Failded",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 my-4 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-purple-500 mb-6">
          Marathon Registration
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Marathon Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marathon Title
            </label>
            <input
              type="text"
              value={title}
              readOnly
              className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Marathon Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Marathon Start Date
            </label>
            <input
              type="text"
              value={marathonStartDate}
              readOnly
              className="w-full px-4 py-2 mt-1 border rounded-md bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Info
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-500 text-white font-bold rounded-md hover:bg-purple-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
