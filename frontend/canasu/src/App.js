// import logo from './logo.svg';
import "./App.css";

import React, { useEffect, useState } from 'react'
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AdminWrapper from './wrapper/AdminWrapper';
import LandingPage from "./components/LandingPage";
import Tabs from "./components/Tabs";
import Admin from "./admin/admin";
import { serviceGet } from "./utils/api";
import ProtectedRoute from "./wrapper/ProtectedRoute";

function App() {
 
  

  return (
    <div className="App">
      <Router>
<<<<<<< HEAD
        <Routes>
          <Route
            path="/login"
            element={<Login updateParentState={handleUpdate} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
=======
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/login" element={<Tabs  />}/>
            <Route path="/admin" element={<ProtectedRoute><AdminWrapper /></ProtectedRoute>}>
              <Route index element={<Navigate to="/admin/batches"/>}/>
                <Route path="batches" element={<h1>blah</h1>}/>
              </Route>
            {/* <Route path="/batches" element={<Batches />}/> */}
             

            
            
>>>>>>> 2c1f4264636db091d97ea469b96a4248e60f18c5
        </Routes>
      </Router>
    </div>
  );
}

export default App;
