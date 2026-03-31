import Navbar from "./Navbar";
import { doctors, patients } from "../data/data";

function Dashboard({ appointments }) {

  const pending = appointments.filter(
    (a) => a.status === "Pending"
  ).length;

  const completed = appointments.filter(
    (a) => a.status === "Completed"
  ).length;

  const recent = [...appointments].slice(-3).reverse();

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Dashboard</h2>

        <h3>Welcome to Hospital Management System</h3>

        <div className="card">Doctors: {doctors.length}</div>
        <div className="card">Patients: {patients.length}</div>
        <div className="card">Appointments: {appointments.length}</div>

        <div className="card">Pending: {pending}</div>
        <div className="card">Completed: {completed}</div>

        <div className="card">
          <h3>Recent Activity</h3>

          {recent.length === 0 ? (
            <p>No recent activity</p>
          ) : (
            recent.map((a) => (
              <p key={a.id}>
                {a.patient} → {a.doctor}
              </p>
            ))
          )}
        </div>

        {appointments.length === 0 && (
          <p>No appointments yet. Start by booking one.</p>
        )}

      </div>
    </div>
  );
}

export default Dashboard;