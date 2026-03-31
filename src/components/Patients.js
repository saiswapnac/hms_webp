import Navbar from "./Navbar";
import { useState } from "react";
import { patients as initialPatients } from "../data/data";

function Patients() {
  const [patients, setPatients] = useState(initialPatients);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");

  const addPatient = () => {
    if (!name || !age || !disease) return;

    const newPatient = {
      id: Date.now(),
      name,
      age,
      disease
    };

    setPatients([...patients, newPatient]);
    setName("");
    setAge("");
    setDisease("");
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Patients</h2>

        <input
          placeholder="Search patient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="card">
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <input placeholder="Disease" value={disease} onChange={(e) => setDisease(e.target.value)} />
          <button onClick={addPatient}>Add</button>
        </div>

        {patients
          .filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((p) => (
            <div className="card" key={p.id}>
              {p.name} | {p.age} | {p.disease}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Patients;