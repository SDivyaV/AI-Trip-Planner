import Navbar from "@/components/ui/custom/Navbar";
import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import Information from "../components/Information";
import Hotel from "../components/Hotel";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

const ViewTrip = () => {

    const {tripId} = useParams(); 

    const [trip,setTrip] = useState([]);

    /*use to get Information from Firebase */
    const GetTripData = async() => {
        const docRef = doc(db,'AITrips',tripId);
        const docSnap = await getDoc(docRef);

        if(docSnap.exists){
            console.log("Document:",docSnap.data());
            setTrip(docSnap.data())
        } else {
            console.log("No such document");
            toast('No Trip Found!');
        }
    }

    useEffect(() => {
      if (tripId) {
        GetTripData();
      }
    }, [tripId]);

    useEffect(() => {
      console.log("Fetched trip data:", trip); 
    });

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-10 md:px-20 lg:px-44 xl:px-56">
        {/* Information Section */}

        <Information trip={trip}/>

        {/* Hotel Information */}

        <Hotel trip={trip}/>

        {/* Daily Plan */}

        <PlacesToVisit trip={trip}/>

        {/* Footer */}
        <Footer trip={trip}/>
      </div>
    </div>
  );
};

export default ViewTrip;
