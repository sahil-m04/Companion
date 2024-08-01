import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className='home-container'>
      <section id="intro">
        <h2 id="welcome">Welcome to <span id='cmp'>COMPANION</span></h2>
        <p>your online therapist</p>
        <br />
        <p>The first step for healing your Mental Health</p>
      </section>
      <section id="our-mission">
        <h2 id="mission">Our Mission</h2>
        <p id="para">
          At <span id='cmp1'>COMPANION</span>, our mission is to provide comprehensive support and resources for mental health and well-being. <br />We believe in the importance of mental health for a fulfilling and balanced life, and we are dedicated to making support accessible to everyone. Our goal is to create a safe and welcoming space where individuals can find the help they need, whether through expert advice, community support, or valuable information.
        </p>
        <h2>What we Offer</h2>
        <ul>
          <li><strong>Books and Resources:</strong> Curated recommendations and articles to help you understand and navigate mental health challenges</li>
          <li><strong>Expert Chat:</strong> Direct access to mental health professionals for personalized advice and support.</li>
          <li><strong>Community Blogs:</strong> A platform for sharing personal stories, insights, and experiences to foster a sense of community and mutual support.</li>
        </ul>
        <h2>Our Commitment</h2>
      <ul>
        <li><strong>Accessibility:</strong> Ensuring our resources and services are available to all, regardless of background or circumstance.</li>
        <li><strong>Support:</strong> Providing compassionate, professional, and confidential support to those in need.</li>
        <li><strong>Education:</strong> Promoting awareness and understanding of mental health issues to reduce stigma and encourage proactive care.</li>
      </ul>

      <h2>Join Us</h2>
      <p>
        We invite you to explore our resources, connect with experts, and share your own experiences. Together, we can build a stronger, more informed community that values and prioritizes mental health.
      </p>
      </section>
    </div>
  );
}

export default Home;
