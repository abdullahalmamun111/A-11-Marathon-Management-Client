import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "../AuthProvider/AuthContext";
import Loading from "./Loading";
import MarathonCard from "./MarathonCard";

const Marathon = () => {
  const { loading } = useContext(contextApi);
  const [marathon, setMarathon] = useState([]);

  useEffect(() => {
    fetch("https://marathon-mangement-server.vercel.app/marathon")
      .then((res) => res.json())
      .then((data) => {
        setMarathon(data);
      });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="bg-gray-100 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-500"> MARATHON</h1>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {marathon.map((item) => (
            <MarathonCard item={item}></MarathonCard>
          ))}
        </div>
      </div>
    );
  }
};

export default Marathon;
