function Contact() {
  return (
    <div>
      <div className="container">
        <h2>Contact Us</h2>

        <div className="card">
          <h3>Hospital Information</h3>
          <p><strong>Name:</strong> Usui Takumi Hospital</p>
          <p><strong>Address:</strong> 123 Main Road, Bannerghatta, Bangalore, Karnataka</p>
          <p><strong>Phone:</strong> +91 8792894820</p>
          <p><strong>Email:</strong> saiswapna.2024@vitstudent.ac.in</p>
        </div>

        <div className="card">
          <h3>Working Hours</h3>
          <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
          <p>Saturday: 10:00 AM – 4:00 PM</p>
          <p>Sunday: Emergency Only</p>
        </div>

        <div className="card">
          <h3>About This System</h3>
          <p>
            This Hospital Management System was developed by 
            <strong> Saiswapna Chakraborty (24BCE0617)</strong> from VIT University.
            It helps manage patient records, doctor information, and appointment scheduling efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;