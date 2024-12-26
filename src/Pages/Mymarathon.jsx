import React, { useContext, useEffect, useState } from 'react';
import { contextApi } from '../AuthProvider/AuthContext';

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
        const confirmDelete = window.confirm("Are you sure you want to delete this marathon?");
        if (confirmDelete) {
            fetch(`http://localhost:5000/marathon/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Marathon deleted successfully!');
                        setMarathon(userMarathon.filter(marathon => marathon._id !== id));
                    }
                });
        }
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
