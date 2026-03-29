import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Doctors from "./components/Doctors";
import Patients from "./components/Patients";
import Appointments from "./components/Appointments";
import Contact from "./components/Contact";

function App() {
  const [appointments, setAppointments] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard appointments={appointments} />}
        />

        <Route
          path="/appointments"
          element={
            <Appointments
              appointments={appointments}
              setAppointments={setAppointments}
            />
          }
        />

        <Route path="/doctors" element={<Doctors />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;