import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "../AuthProvider/AuthContext";
import Swal from "sweetalert2";
import Mymarathon from "./Mymarathon";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyApply = () => {
  const { user } = useContext(contextApi);
  const [applyData, setApplyData] = useState([]);
  const [loadedData, setloadedData] = useState([]);
  const navigate = useNavigate();
  const [updateapplyId, setUpdateApplyId] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

 
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://marathon-mangement-server.vercel.app/searchApply?email=${user.email}&title=${searchQuery}`
        );
        const data = await response.json();
        setApplyData(data); 
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery, user.email]);

//   apply data load
  useEffect(() => {
    // fetch(`https://marathon-mangement-server.vercel.app/registrations?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setApplyData(data);
    //   });
    axios.get(`https://marathon-mangement-server.vercel.app/registrations?email=${user.email}`,{
      withCredentials: true
    })
    .then(res => setApplyData(res.data))
  }, [user.email]);

  //   update related work
  const [formData, setFormData] = useState({
    email: user?.email || "",
    firstName: "",
    lastName: "",
    contactNumber: "",
    additionalInfo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateApply = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updateApplyData = Object.fromEntries(formData.entries());
    updateApplyData.marathon_id = loadedData._id;

    fetch(`https://marathon-mangement-server.vercel.app/updateApply/${updateapplyId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateApplyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          document.getElementById("my_modal_4").close();
          Swal.fire({
            title: "Success!",
            text: "Your Apply Updated Successfully",
            icon: "success",
          });
          navigate("/");
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Apply Updated Failed",
            icon: "error",
          });
        }
      });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`https://marathon-mangement-server.vercel.app/registrations/${id}`);
      const data = await response.json();
      setloadedData(data);
      setUpdateApplyId(id);
      document.getElementById("my_modal_4").showModal();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
        fetch(`https://marathon-mangement-server.vercel.app/allapply/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Apply has been deleted.",
                icon: "success",
              });
              const remaining = applyData.filter((apply) => apply._id !== id);
              setApplyData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        My Applications ({applyData.length})
      </h1>

      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Marathon Title</th>
              <th className="px-4 py-2 text-left">First Name</th>
              <th className="px-4 py-2 text-left">Last Name</th>
              <th className="px-4 py-2 text-left">Contact Number</th>
              <th className="px-4 py-2 text-left">Additional Info</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applyData.length > 0 ? (
              applyData.map((apply) => (
                <tr
                  key={apply._id}
                  className="hover:bg-gray-100 border-t border-gray-200"
                >
                  <td className="px-4 py-2 font-semibold text-gray-800">
                    {apply.marathonTitle}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{apply.firstName}</td>
                  <td className="px-4 py-2 text-gray-700">{apply.lastName}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {apply.contactNumber}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {apply.additionalInfo}
                  </td>
                  <td className="px-4 py-2 space-y-3">
                    <button
                      onClick={() => {
                        handleUpdate(apply._id);
                        document.getElementById("my_modal_4").showModal();
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(apply._id)}
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
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* modal */}

      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="bg-gradient-to-r from-purple-300 via-blue-300 to-green-300 min-h-screen flex items-center justify-center">
              <div className="bg-white p-8 my-4 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold text-center text-purple-500 mb-6">
                  Update Registration
                </h1>
                <form onSubmit={handleUpdateApply} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={loadedData.email}
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
                      name="marathonTitle"
                      defaultValue={loadedData.marathonTitle}
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
                      name="marathonStartDate"
                      defaultValue={loadedData.marathonStartDate}
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
                      defaultValue={loadedData.firstName}
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
                      defaultValue={loadedData.lastName}
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
                      defaultValue={loadedData.contactNumber}
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
                      defaultValue={loadedData.additionalInfo}
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
                    Update Registration
                  </button>

                  <div className="modal-action">
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
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyApply;
