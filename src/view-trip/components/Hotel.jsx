import React from "react";
import { Link } from "react-router-dom";

const Hotel = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5 mb-5">Hotel Recommendations</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {trip?.tripData?.travelPlan?.hotelOptions?.map((hotelOptions, index) => (
          <Link to={'https://www.google.com/maps/search/?api=1&query='+hotelOptions?.hotelName+","+hotelOptions?.hotelAddress} target="_blank">
          <div className="hover:scale-105 transition-all cursor-pointer">
            <img
              src='https://images.pexels.com/photos/3761182/pexels-photo-3761182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt="Hotel Image"
              className="rounded-lg"
            />
            <div className="my-2 mt-5 flex flex-col gap-4">
                <h2 className="font-medium">{hotelOptions?.hotelName}</h2>
                <h2 className="text-xs text-gray-700">📍{hotelOptions?.hotelAddress}</h2>
                <h2 className="text-xs text-gray-700">💳{hotelOptions?.price}</h2>
                <h2>⭐{hotelOptions?.rating}</h2>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
