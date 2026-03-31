import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Doctors from "./components/Doctors";
import Patients from "./components/Patients";
import Appointments from "./components/Appointments";
import Contact from "./components/Contact";

function App() {
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard appointments={appointments} /> : <Login />}
        />

        <Route
          path="/appointments"
          element={
            isLoggedIn ? (
              <Appointments
                appointments={appointments}
                setAppointments={setAppointments}
              />
            ) : (
              <Login />
            )
          }
        />

        <Route path="/doctors" element={isLoggedIn ? <Doctors /> : <Login />} />
        <Route path="/patients" element={isLoggedIn ? <Patients /> : <Login />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;