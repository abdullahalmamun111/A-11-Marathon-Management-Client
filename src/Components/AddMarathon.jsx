import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt } from "react-icons/fa"; // Import calendar icon
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddMarathon = () => {
    const navigate = useNavigate();
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect form data using FormData API
        const formData = new FormData(e.target);
        const marathonData = Object.fromEntries(formData.entries());

        // Include date values into the final data
        marathonData.startRegDate = startRegDate;
        marathonData.endRegDate = endRegDate;
        marathonData.marathonStartDate = marathonStartDate;
        marathonData.createdAt = new Date();
        marathonData.registrationCount = 0;

        fetch('http://localhost:5000/addmarathon',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(marathonData)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: "Success!",
                        text: "Marathon Added Successfully",
                        icon: "success"
                      });
                      navigate('/')  
                }
                else{
                    Swal.fire({
                        title: "Failed!",
                        text: "Marathon Added Failded",
                        icon: "error"
                      });
                }
            })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-300 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Create a Marathon
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Marathon Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Marathon Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter marathon title"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Start Registration Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Start Registration Date
                        </label>
                        <div className="relative">
                            <DatePicker
                                selected={startRegDate}
                                onChange={(date) => setStartRegDate(date)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Select start registration date"
                                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                required
                                wrapperClassName="w-full"
                            />
                            <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* End Registration Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            End Registration Date
                        </label>
                        <div className="relative">
                            <DatePicker
                                selected={endRegDate}
                                onChange={(date) => setEndRegDate(date)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Select end registration date"
                                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                required
                                wrapperClassName="w-full"
                            />
                            <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Marathon Start Date */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Marathon Start Date
                        </label>
                        <div className="relative">
                            <DatePicker
                                selected={marathonStartDate}
                                onChange={(date) => setMarathonStartDate(date)}
                                dateFormat="yyyy-MM-dd"
                                placeholderText="Select marathon start date"
                                className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                required
                                wrapperClassName="w-full"
                            />
                            <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter marathon location"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Running Distance */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Running Distance
                        </label>
                        <select
                            name="distance"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            required
                        >
                            <option value="" disabled>
                                Select Distance
                            </option>
                            <option value="25k">25k</option>
                            <option value="10k">10k</option>
                            <option value="3k">3k</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            name="description"
                            placeholder="Enter marathon description"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Marathon Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Marathon Image URL
                        </label>
                        <input
                            type="url"
                            name="image"
                            placeholder="Enter image URL"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                        >
                            Create Marathon
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMarathon;
