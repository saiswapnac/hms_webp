import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      <h1>Hospital Management System</h1>

      <p className="tagline">
        Efficiently manage patients, doctors, and appointments in one place.
      </p>

      <Link to="/login">
        <button className="home-btn">Login</button>
      </Link>

      <div className="home-features">

        <div className="feature-card">
          <h3>Patient Management</h3>
          <p>Store and manage patient records easily.</p>
        </div>

        <div className="feature-card">
          <h3>Doctor Information</h3>
          <p>Access doctor details and availability.</p>
        </div>

        <div className="feature-card">
          <h3>Appointment Scheduling</h3>
          <p>Book and track appointments efficiently.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;