import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="logo">Hospital Management System</h3>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;