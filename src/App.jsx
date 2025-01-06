import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './create-trip/Home'
import Header from './components/ui/custom/Header'
import ViewTrip from './view-trip/[tripId]/ViewTrip'
import MyTrip from './my-trips/MyTrip'



const App = () => {
  return (  
    <div>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/trip' element={<Home />}/>
        <Route path='/view-trip/:tripId' element={<ViewTrip />} />
        <Route path='/mytrip' element={<MyTrip />}/>
     </Routes>
    </div>
  )
}

export default App
