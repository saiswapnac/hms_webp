import { doctors } from "../data/data";
import { useState } from "react";

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div>
      <div className="container">
        <h2>Our Doctors</h2>

        <div className="doctor-grid">
          {doctors.map((doc) => (
            <div className="doctor-card" key={doc.id}>
              <h3>{doc.name}</h3>
              <p>{doc.spec}</p>

              <button onClick={() => setSelectedDoctor(doc)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedDoctor && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedDoctor(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedDoctor.name}</h2>
            <p><strong>Specialization:</strong> {selectedDoctor.spec}</p>
            <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
            <p><strong>Qualification:</strong> {selectedDoctor.qualification}</p>
            <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
            <p><strong>Availability:</strong> {selectedDoctor.availability}</p>

            <button onClick={() => setSelectedDoctor(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Doctors;