import Navbar from "./Navbar";
import { doctors, patients } from "../data/data";

function Dashboard({ appointments }) {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Dashboard</h2>

        <div className="card">Total Doctors: {doctors.length}</div>
        <div className="card">Total Patients: {patients.length}</div>
        <div className="card">
          Total Appointments: {appointments.length}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;