// import logo from './logo.svg';
import "./App.css";

import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminWrapper from './wrapper/AdminWrapper';
import MenteeWrapper from "./wrapper/MenteeWrapper";
import MentorWrapper from "./wrapper/MentorWrapper";
import LandingPage from "./components/LandingPage";
import Tabs from "./components/Tabs";
import Admin from "./admin/admin";
import { serviceGet } from "./utils/api";
import ProtectedRoute from "./wrapper/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import MentorDashboard from "./mentor/MentorDashboard";
import Batches from "./components/Batches";
import MenteeDashboard from "./mentee/MenteeDashboard";
import SignUp from "./mentor/SignUp"


function App() {
  return (
    <div className="App">
      <Toaster/>
      <Router>
      
      <Routes>
            
            <Route path="/" element={<LandingPage  />}/>
            <Route path="/login" element={<Tabs  />}/>
            <Route path="/admin" element={<ProtectedRoute><AdminWrapper /></ProtectedRoute>}>
              <Route index element={<Navigate to="/admin/batches"/>}/>
                <Route path="batches" element={<h1>blah</h1>}/>
            </Route>
            
            <Route path="/mentor" element={<ProtectedRoute><MentorWrapper /></ProtectedRoute>}>
              <Route index element={<Navigate to="/admin/batches"/>}/>
                <Route path="batches" element={<h1>blah</h1>}/>
            </Route>

            <Route path="/student" element={<ProtectedRoute><MenteeWrapper /></ProtectedRoute>}>
              <Route index element={<Navigate to="/admin/batches"/>}/>
                <Route path="batches" element={<h1>blah</h1>}/>
            </Route>

            {/* <Route path="/batches" element={<Batches />}/> */}
             

        </Routes>
      </Router>
    </div>
  );
}

export default App;
