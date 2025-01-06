import Navbar from "@/components/ui/custom/Navbar";
import { db } from "@/service/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyTrip = () => {
  const navigate = useNavigate();

  const [userTrip,setUserTrip] = useState([]);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/");
      return;
    }

    const q = query(
      collection(db, "AITrips"),
      where("userEmail", "==", user?.email)
    );

    const trips = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      trips.push(doc.data());
    });
    setUserTrip(trips);
  };
  useEffect(() => {
    GetUserTrips();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="sm:px-10 md:px-32 mg:px-56 xl:px-72 px-5 mt-10">
        <h2 className="font-bold text-3xl">My Trips</h2>
        <div className="grid grid-cols-3 gap-5">
        {userTrip?.length > 0 ? userTrip.map((trip, index) => (
          <Link to={'/view-trip/'+trip?.id}>
          <div key={index} className="flex flex-col gap-4 mt-5 hover:scale-105 transition-all"> 
              <img 
                  src="https://images.pexels.com/photos/160483/hiker-traveler-trip-travel-160483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Trip"
                  className="object-cover rounded-xl h-[240px] w-[240px] cursor-pointer"
              />
              <h2 className="font-bold text-lg">{trip?.userSelection?.location?.label}</h2>
              <h2 className="text-sm text-gray-500">{trip?.userSelection?.noOfDays}{" "}
                  {trip?.userSelection?.noOfDays > 1 ? "Days" : "Day"} with {trip?.userSelection?.budget}</h2>
          </div>
          </Link>  
          )): [1,2,3,4,5,6].map((item,index) => (
            <div key={index} className="h-[300px] w-full bg-slate-200 animate-pulse rounded-xl">

            </div>
          ))}
        </div>      
      </div>
    </div>
  );
};

export default MyTrip;
