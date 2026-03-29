import Navbar from "./Navbar";
import { patients } from "../data/data";

function Patients() {
  return (
  <div>
    <Navbar />

    <div className="container">
      <h2>Patients</h2>

      {patients.map((pat) => (
        <div className="card" key={pat.id}>
          {pat.name} | Age: {pat.age} | Disease: {pat.disease}
        </div>
      ))}
    </div>
  </div>
);
}

export default Patients;