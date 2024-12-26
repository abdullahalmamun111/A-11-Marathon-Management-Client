import React, { useContext, useEffect, useState } from 'react';
import { contextApi } from '../AuthProvider/AuthContext';
import Swal from 'sweetalert2';


const Mymarathon = () => {
    const { user } = useContext(contextApi);
    const [userMarathon, setMarathon] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allmarathon?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
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
            if(result.isConfirmed){
                fetch(`http://localhost:5000/allmarathon/${id}`, {
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
                    const remaining = userMarathon.filter((marthon) => marthon._id !== id);
                    setMarathon(remaining);
                  }
                });  
            }
          })
    };

    const handleUpdate = (id) => {
        alert(`Update feature for marathon with ID: ${id} is under construction.`);
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
                            userMarathon.map(marathon => (
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
                                            onClick={() => handleUpdate(marathon._id)}
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
                                <td
                                    colSpan="6"
                                    className="text-center py-4 text-gray-500"
                                >
                                    No marathons found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mymarathon;
