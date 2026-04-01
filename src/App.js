import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Doctors from "./components/Doctors";
import Patients from "./components/Patients";
import Appointments from "./components/Appointments";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { patients as initialPatients } from "./data/data";

function NavbarWrapper() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const hideNavbarOn = ["/", "/login"];

  return isLoggedIn && !hideNavbarOn.includes(location.pathname) ? (
    <Navbar />
  ) : null;
}

function App() {
  const [appointments, setAppointments] = useState([]);

  const [patients, setPatients] = useState(initialPatients);

  return (
    <Router>
      <NavbarWrapper />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard 
              appointments={appointments}
              patients={patients}
            />}
        />

        <Route
          path="/appointments"
          element={
            <Appointments
              appointments={appointments}
              setAppointments={setAppointments}
              patients={patients}
            />
          }
        />

        <Route path="/doctors" element={<Doctors />} />

        <Route
          path="/patients"
          element={
            <Patients
              patients={patients}
              setPatients={setPatients}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;