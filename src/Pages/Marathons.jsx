import React, { useContext, useEffect, useState } from 'react';
import { contextApi } from '../AuthProvider/AuthContext';
import MarathonCard from '../Components/MarathonCard';
import Loading from '../Components/Loading';

const Marathons = () => {
    const {loading} = useContext(contextApi);
    const [allmarathon, setAllmarathon] = useState([]);

   useEffect(() => {
    fetch('http://localhost:5000/allmarathon')
    .then(res => res.json())
    .then(data => {
        setAllmarathon(data)
    })
   },[])

   if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="bg-gray-100 py-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-purple-500">All MARATHONS</h1>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allmarathon.map((item) => (
            <MarathonCard item={item}></MarathonCard>
          ))}
        </div>
      </div>
    );
  }
};

export default Marathons;