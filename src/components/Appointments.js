import Navbar from "./Navbar";
import { useState } from "react";
import { doctors, patients } from "../data/data";

function Appointments({ appointments, setAppointments }) {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const trimmed = patient.trim();

    if (!trimmed || !doctor || !date) {
      setMessage("Please fill all fields");
      return;
    }

    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      setMessage("Invalid date");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      patient: trimmed,
      doctor,
      date,
      status: "Pending"
    };

    setAppointments([...appointments, newAppointment]);
    setMessage("Appointment booked!");

    setPatient("");
    setDoctor("");
    setDate("");
  };

  const finishAppointment = (id) => {
    const updated = appointments.map((app) =>
      app.id === id ? { ...app, status: "Completed" } : app
    );
    setAppointments(updated);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Book Appointment</h2>

        <div className="card">
          <select
            value={patient}
            onChange={(e) => setPatient(e.target.value)}
          >
            <option value="">Select Patient</option>
            {patients.map((pat) => (
              <option key={pat.id} value={pat.name}>
                {pat.name} (Age: {pat.age})
              </option>
            ))}
          </select>

          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.name}>
                {doc.name} ({doc.spec})
              </option>
            ))}
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button onClick={handleSubmit}>Book</button>

          {message && <p>{message}</p>}
        </div>

        <h3>Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments</p>
        ) : (
          appointments.map((app) => (
            <div className="card" key={app.id}>
              <strong>{app.patient}</strong> → {app.doctor} ({app.date})

              <span className={`status ${app.status.toLowerCase()}`}>
                {app.status}
              </span>

              {app.status === "Pending" && (
                <button onClick={() => finishAppointment(app.id)}>
                  Finish
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Appointments;