import React, { useState } from "react";
import AddMarathon from "../Components/AddMarathon";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("addMarathon");
    const navigate = useNavigate();

    const renderContent = () => {
        switch (activeTab) {
            case "addMarathon":
                return <div className="p-6 rounded-lg">
                    <AddMarathon></AddMarathon>
                </div>;
            case "myMarathonList":
                return <div className="bg-gray-100 p-6 rounded-lg shadow">List of Marathons (Fetched from Database)</div>;
            case "myApplyList":
                return <div className="bg-gray-100 p-6 rounded-lg shadow">List of Applies (Fetched from Database)</div>;
            default:
                return <div className="bg-gray-100 p-6 rounded-lg shadow">Welcome to Dashboard</div>;
        }
    };

    return (
        <div className="flex flex-col ">
            {/* Header */}
            <header className="bg-blue-600 text-white text-center py-4">
                <h1 className="text-2xl font-bold">Dashboard</h1>
            </header>

            {/* Main Layout */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <nav className="w-1/4 bg-gray-800 text-white p-4">
                    <ul className="space-y-4">
                        <li>
                            <button
                                onClick={() => setActiveTab("addMarathon")}
                                className={`w-full py-2 px-4 text-left rounded ${
                                    activeTab === "addMarathon"
                                        ? "bg-blue-500"
                                        : "hover:bg-gray-700"
                                }`}
                            >
                                Add Marathon
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveTab("myMarathonList")}
                                className={`w-full py-2 px-4 text-left rounded ${
                                    activeTab === "myMarathonList"
                                        ? "bg-blue-500"
                                        : "hover:bg-gray-700"
                                }`}
                            >
                                My Marathon List
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setActiveTab("myApplyList")}
                                className={`w-full py-2 px-4 text-left rounded ${
                                    activeTab === "myApplyList"
                                        ? "bg-blue-500"
                                        : "hover:bg-gray-700"
                                }`}
                            >
                                My Apply List
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Content Area */}
                <main className="w-3/4 h-full p-6 bg-gray-50">
                    {renderContent()}
                </main>
            </div>

           
        </div>
    );
};

export default Dashboard;
