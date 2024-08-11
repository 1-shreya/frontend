import React from 'react';

function About() {
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <p>
          At [Your Company Name], we believe that everyone deserves access to quality healthcare. That's why we're dedicated to providing affordable and comprehensive health insurance plans to individuals, families, and businesses.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide innovative health insurance solutions that meet the unique needs of our customers. We strive to deliver exceptional customer service, while promoting healthy living and wellness in our communities.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Values</h3>
            <ul>
              <li>Customer-centricity: We put our customers at the heart of everything we do.</li>
              <li>Innovation: We continuously seek new ways to improve our products and services.</li>
              <li>Integrity: We operate with transparency, honesty, and accountability.</li>
              <li>Compassion: We care about the well-being of our customers and communities.</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h3>Meet Our Team</h3>
            <div className="team-members">
              <div className="team-member">
                <img src="https://via.placeholder.com/150x150" alt="John Doe" />
                <h4>John Doe</h4>
                <p>CEO</p>
              </div>
              <div className="team-member">
                <img src="https://via.placeholder.com/150x150" alt="Jane Smith" />
                <h4>Jane Smith</h4>
                <p>COO</p>
              </div>
              <div className="team-member">
                <img src="https://via.placeholder.com/150x150" alt="Bob Johnson" />
                <h4>Bob Johnson</h4>
                <p>CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;