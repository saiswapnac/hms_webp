import Navbar from "./Navbar";
import { useState } from "react";

function Appointments({ appointments, setAppointments }) {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    if (!patient || !doctor || !date) {
      alert("Please fill all fields");
      return;
    }

    const newAppointment = {
      id: appointments.length + 1,
      patient,
      doctor,
      date
    };

    // 🔥 THIS is the key line
    setAppointments([...appointments, newAppointment]);

    alert("Appointment booked successfully!");

    setPatient("");
    setDoctor("");
    setDate("");
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Book Appointment</h2>

        {/* FORM */}
        <div className="card">
          <input
            placeholder="Patient Name"
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          />

          <input
            placeholder="Doctor Name"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button onClick={handleSubmit}>Book Appointment</button>
        </div>

        {/* DISPLAY ALL APPOINTMENTS */}
        <h3>All Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments yet</p>
        ) : (
          appointments.map((app) => (
            <div className="card" key={app.id}>
              {app.patient} → {app.doctor} on {app.date}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Appointments;