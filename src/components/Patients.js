import { useState } from "react";

function Patients({ patients, setPatients }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const addPatient = () => {
    if (!name || !age || !gender || !phone) return;

    const newPatient = {
      id: Date.now(),
      name,
      age,
      gender,
      phone
    };

    setPatients([...patients, newPatient]);

    setName("");
    setAge("");
    setGender("");
    setPhone("");
  };

  return (
    <div>
      <div className="container">
        <h2>Patients</h2>

        <div className="card">

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button onClick={addPatient}>Add Patient</button>
        </div>

        {patients.map((p) => (
          <div className="card" key={p.id}>
            <strong>{p.name}</strong> | Age: {p.age} | {p.gender} | {p.phone}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Patients;