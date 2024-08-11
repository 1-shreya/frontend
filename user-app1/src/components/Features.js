import React from 'react';

function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <ul>
        <li>
          <i className="fas fa-hospital"></i>
          <h3>Comprehensive Coverage</h3>
          <p>Our plans cover a wide range of medical services, including doctor visits, hospital stays, and prescriptions.</p>
        </li>
        <li>
          <i className="fas fa-money-bill-wave"></i>
          <h3>Affordable Premiums</h3>
          <p>We offer competitive pricing for our plans, so you can get the coverage you need without breaking the bank.</p>
        </li>
        <li>
          <i className="fas fa-phone"></i>
          <h3>24/7 Customer Support</h3>
          <p>Our customer support team is available 24/7 to answer your questions and help you with any issues.</p>
        </li>
      </ul>
    </section>
  );
}

export default Features;