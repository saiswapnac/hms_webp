import Navbar from "./Navbar";
import { doctors } from "../data/data";

function Doctors() {
  return (
  <div>
    <Navbar />

    <div className="container">
      <h2>Doctors</h2>

      {doctors.map((doc) => (
        <div className="card" key={doc.id}>
          {doc.name} - {doc.spec}
        </div>
      ))}
    </div>
  </div>
);
}

export default Doctors;