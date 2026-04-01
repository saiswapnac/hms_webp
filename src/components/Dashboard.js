import { doctors, patients } from "../data/data";

function Dashboard({ appointments }) {

  const today = new Date().toISOString().split("T")[0];

  const todayAppointments = appointments.filter(
    (a) => a.date === today
  );

  const pending = appointments.filter(
    (a) => a.status === "Pending"
  ).length;

  const completed = appointments.filter(
    (a) => a.status === "Completed"
  ).length;

  const cancelled = appointments.filter(
    (a) => a.status === "Cancelled"
  ).length;

  const recent = [...appointments].slice(-3).reverse();

  const doctorStats = doctors.map(doc => {
    const count = appointments.filter(
      (a) => a.doctor?.name === doc.name
    ).length;

    return { name: doc.name, count };
  });

  return (
    <div>
      <div className="container">
        <h2>Dashboard</h2>

        <h3>Welcome to Hospital Management System</h3>

        <div className="card">Doctors: {doctors.length}</div>
        <div className="card">Patients: {patients.length}</div>
        <div className="card">Appointments: {appointments.length}</div>

        <div className="card">
          Today: {todayAppointments.length} / {appointments.length}
        </div>

        <div className="card">Pending: {pending}</div>
        <div className="card">Completed: {completed}</div>
        <div className="card">Cancelled: {cancelled}</div>

        <div className="card">
          <h3>Doctor Workload</h3>
          {doctorStats.map(d => (
            <p key={d.name}>
              {d.name}: {d.count} appointments
            </p>
          ))}
        </div>

        <div className="card">
          <h3>Recent Activity</h3>

          {recent.length === 0 ? (
            <p>No recent activity</p>
          ) : (
            recent.map((a) => (
              <p key={a.id}>
                {a.patient?.name} → {a.doctor?.name}
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