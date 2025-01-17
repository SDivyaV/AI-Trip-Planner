import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./create-trip/Home";
import Header from "./components/ui/custom/Header";
import ViewTrip from "./view-trip/[tripId]/ViewTrip";
import MyTrip from "./my-trips/MyTrip";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/trip" element={<Home />} />
          <Route path="/view-trip/:tripId" element={<ViewTrip />} />
          <Route path="/mytrip" element={<MyTrip />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
