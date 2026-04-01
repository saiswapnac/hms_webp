import { useState } from "react";
import { doctors } from "../data/data";

function Appointments({ appointments, setAppointments, patients }) {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [disease, setDisease] = useState("");
  const [message, setMessage] = useState("");

  const selectedPatient = patients.find((p) => p.name === patient);

  const handleSubmit = () => {
    if (!window.confirm("Confirm appointment?")) return;

    if (!patient || !doctor || !date || !disease) {
      setMessage("Fill all fields");
      return;
    }

    const exists = appointments.some(
      (a) => a.doctor.name === doctor && a.date === date
    );

    if (exists) {
      setMessage("Doctor already booked");
      return;
    }

    const selectedDoctor = doctors.find((d) => d.name === doctor);

    const newAppointment = {
      id: Date.now(),
      patient: selectedPatient,
      doctor: selectedDoctor,
      date,
      disease,
      status: "Pending"
    };

    setAppointments([...appointments, newAppointment]);
    setMessage("Appointment booked!");

    setPatient("");
    setDoctor("");
    setDate("");
    setDisease("");
  };

  const finishAppointment = (id) => {
    const updated = appointments.map((app) =>
      app.id === id ? { ...app, status: "Completed" } : app
    );
    setAppointments(updated);
  };

  const cancelAppointment = (id) => {
    const updated = appointments.map((app) =>
      app.id === id ? { ...app, status: "Cancelled" } : app
    );
    setAppointments(updated);
  };

  return (
    <div>
      <div className="container">
        <h2>Appointments</h2>

        <div className="card">

          <select value={patient} onChange={(e) => setPatient(e.target.value)}>
            <option value="">Select Patient</option>
            {patients.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} ({p.age})
              </option>
            ))}
          </select>

          {selectedPatient && (
            <div className="card">
              <p><strong>Age:</strong> {selectedPatient.age}</p>
              <p><strong>Gender:</strong> {selectedPatient.gender}</p>
              <p><strong>Phone:</strong> {selectedPatient.phone}</p>
            </div>
          )}

          <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
            <option value="">Select Doctor</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name} ({d.spec})
              </option>
            ))}
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            placeholder="Disease / Problem"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            disabled={!patient || !doctor || !date || !disease}
          >
            Book Appointment
          </button>

          {message && <p>{message}</p>}
        </div>

        <h3>All Appointments</h3>

        {appointments.length === 0 ? (
          <p>No appointments yet</p>
        ) : (
          appointments.map((a) => (
            <div className="card" key={a.id}>
              <strong>{a.patient.name}</strong> → {a.doctor.name} on {a.date}
              <br />
              Disease: {a.disease}
              <br />
              Status: {a.status}

              {a.status === "Pending" && (
                <>
                  <button onClick={() => finishAppointment(a.id)}>
                    Finish
                  </button>

                  <button onClick={() => cancelAppointment(a.id)}>
                    Cancel
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Appointments;