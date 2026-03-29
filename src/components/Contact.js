import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Contact Us</h2>

        <div className="card">
          <p><b>Hospital Name:</b> Usui Takumi Hospital</p>
          <p><b>Address:</b> 123 Main Road, Bangalore, Karnataka</p>
          <p><b>Phone:</b> +91 8792894820</p>
          <p><b>Email:</b> saiswapna.2024@vitstudent.ac.in</p>
        </div>

        <div className="card">
          <h3>About</h3>
          <p>
            Our hospital's management system was made by Saiswapna Chakraborty (24BCE0617), a student of VIT University. This system is designed to manage hospital operations efficiently, including patient records, doctor information, and appointment scheduling.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;