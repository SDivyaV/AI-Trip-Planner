import React from "react";
import { Link } from "react-router-dom";

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mt-10">Places to Visit</h2>
      <div>
        {trip?.tripData?.travelPlan?.itinerary.map((item, index) => (
          <div>
            <h2 className="font-medium text-sm mt-5 ">Day {item.day}</h2>
            <h2 className="font-medium text-[12px] text-orange-600">
              {item.bestTimeToVisit}
            </h2>
            {item.plan.map((place, index) => (
              <Link
                to={
                  "https://www.google.com/maps/search/?api=1&query=" +
                  place?.placeName
                }
                target="_blank"
              >
                <div className="my-3 mb-2">
                  <div className="shadow-md border rounded-lg p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer">
                    {/*<img
                      src="https://images.pexels.com/photos/9510897/pexels-photo-9510897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="w-[100px] h-[100px] rounded-lg"
                    />*/}
                    <div>
                      <h2 className="font-bold text-lg">{place.placeName}</h2>
                      <p className="text-[12px] text-gray-500">
                        {place.placeDetails}
                      </p>
                      <h4 className="text-[10px] text-blue-700">
                        ⌛{place.travelTime}
                      </h4>
                      <h4 className="text-[10px] text-blue-700">
                        Ticket Pricing:{place.ticketPricing}
                      </h4>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
