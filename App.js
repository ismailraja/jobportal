import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Job from "./components/Job";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Option from "./components/Option";
import Registerclient from "./components/Registerclient";
import Registerfreelancer from "./components/Registerfreelancer";
import Dashboardfreelancer from "./components/Dashboardfreelancer";
import Dashboardclient from "./components/Dashboardclient";
import CVBuilder from "./components/CVBuilder";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardclient" element={<Dashboardclient />} />
        <Route path="/dashboardfreelancer" element={<Dashboardfreelancer />} />

        <Route path="/registerclient" element={<Registerclient />} />
        <Route path="/registerfreelancer" element={<Registerfreelancer />} />
        <Route path="/option" element={<Option />} />
        <Route path="/cvbuilder" element={<CVBuilder />} />
      </Routes>
    </Router>
  );
}

export default App;
