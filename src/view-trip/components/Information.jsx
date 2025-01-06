import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import React from "react";


const Information = ({ trip }) => {

  return (
    <div>
        <img
          src="https://images.pexels.com/photos/7235893/pexels-photo-7235893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-[480px] w-full object-cover rounded-lg"
          alt="Location"
        />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md">
              📅{trip?.userSelection?.noOfDays}{" "}
              {trip?.userSelection?.noOfDays > 1 ? "Days" : "Day"}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md">
              💳{trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md">
              👣No.of Traveler: {trip?.userSelection?.traveler}{" "}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend style={{ color: "white" }} />
        </Button>
      </div>
    </div>
  );
};

export default Information;
