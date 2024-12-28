import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { FaRegCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

const Mymarathon = () => {
  const navigate = useNavigate();
  const { user } = useContext(contextApi);
  const [userMarathon, setMarathon] = useState([]);
  const [id, setId] = useState(null);
  //   const [selectedMarathon, setSelectedMarathon] = useState(null); // For modal

  const [startRegDate, setStartRegDate] = useState(null);
  const [endRegDate, setEndRegDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);


  const handleUpdateMarathon = (e) => {
     e.preventDefault();

    // Collect form data using FormData API
    const formData = new FormData(e.target);
    const updateMarathonData = Object.fromEntries(formData.entries());
    
    updateMarathonData.startRegDate = startRegDate;
    updateMarathonData.endRegDate = endRegDate;
    updateMarathonData.marathonStartDate = marathonStartDate;
    updateMarathonData.createdAt = new Date();
    updateMarathonData.registrationCount = 0;
    updateMarathonData.email = user.email;
    
    fetch(`https://marathon-mangement-server.vercel.app/updateMarathon/${id}`,{
        method:"PUT",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(updateMarathonData)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            document.getElementById("my_modal_4").close()
            Swal.fire({
                title: "Success!",
                text: "Marathon Updated Successfully",
                icon: "success"
            });
            navigate('/') 
        }
        else{
            Swal.fire({
                title: "Failed!",
                text: "Marathon Updated Failed",
                icon: "error"
            });    
        }
    })
    


  }
  const handleUpdate = (id) => {
    setId(id);
  };

  useEffect(() => {
    fetch(`https://marathon-mangement-server.vercel.app/allmarathon?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMarathon(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://marathon-mangement-server.vercel.app/allmarathon/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
              const remaining = userMarathon.filter(
                (marathon) => marathon._id !== id
              );
              setMarathon(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        My Marathons
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Distance</th>
              <th className="px-4 py-2 text-left">Start Date</th>
              <th className="px-4 py-2 text-left">End Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userMarathon.length > 0 ? (
              userMarathon.map((marathon) => (
                <tr
                  key={marathon._id}
                  className="hover:bg-gray-100 border-t border-gray-200"
                >
                  <td className="px-4 py-2">
                    <img
                      src={marathon.image}
                      alt={marathon.title}
                      className="w-16 h-16 rounded-full inline-block mr-2"
                    />
                    {marathon.title}
                  </td>
                  <td className="px-4 py-2">{marathon.location}</td>
                  <td className="px-4 py-2">{marathon.distance}</td>
                  <td className="px-4 py-2">
                    {new Date(marathon.startRegDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(marathon.endRegDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">
                    <button
                       onClick={() => {
                        document.getElementById("my_modal_4").showModal();
                        handleUpdate(marathon._id)
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(marathon._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No marathons found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className=" mx-auto max-w-3xl bg-white shadow-lg mt-5 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Update Your Marathon
              </h2>
              <form onSubmit={handleUpdateMarathon} className="space-y-6">
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
                    Update Marathon
                  </button>

                  <div className="mt-3 modal-action">
                    <form method="dialog">
                      {/* if there is a button, it will close the modal */}
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_4").close()
                        }
                        className="btn w-full text-white bg-blue-600"
                      >
                        Close Modal
                      </button>
                    </form>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Mymarathon;
