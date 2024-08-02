import React from 'react';
import './About.scss';
import Flexbox from '../Card/Flexbox';
import Card from '../Card/Card';
import sahilmehta from '../assets/sahilmehta.png';
import sujal from '../assets/SujalPro.png';
import abhi from '../assets/Abhir.png';
import vaibhav from '../assets/vaibhavuniyal.png';
function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>COMPANION</strong>, where our mission is to provide comprehensive support and resources for mental health and well-being. We believe that mental health is a crucial aspect of a fulfilling and balanced life, and we are dedicated to making support accessible to everyone.
      </p>

      <h2>Our Story</h2>
      <p>
        <strong>COMPANION</strong> was founded by a group of passionate individuals who recognized the growing need for accessible mental health resources and support. Our team is comprised of mental health professionals, advocates, and volunteers who are committed to making a positive impact in the community.
      </p>

      <h2>What We Do</h2>
      <ul>
        <li>
          <strong>Books and Resources:</strong> We offer curated recommendations and articles to help individuals understand and navigate mental health challenges.
        </li>
        <li>
          <strong>Expert Chat:</strong> Our platform provides direct access to mental health professionals for personalized advice and support.
        </li>
        <li>
          <strong>Community Blogs:</strong> We offer a platform for sharing personal stories, insights, and experiences to foster a sense of community and mutual support.
        </li>
      </ul>

      <h2>Our Values</h2>
      <p>
        We are committed to:
      </p>
      <ul>
        <li>
          <strong>Accessibility:</strong> Ensuring our resources and services are available to all, regardless of background or circumstance.
        </li>
        <li>
          <strong>Support:</strong> Providing compassionate, professional, and confidential support to those in need.
        </li>
        <li>
          <strong>Education:</strong> Promoting awareness and understanding of mental health issues to reduce stigma and encourage proactive care.
        </li>
      </ul>

      <h2>Meet the Team</h2>
      <div className="team">
        {/* <Flexbox>
          <Card
            src={sahilmehta}
            title="Sahil Mehta"
            designation="Student"
          />

          <Card
            src={sujal}
            title="Sujal Bindra"
            designation="Student"
          />
        </Flexbox>
        <Flexbox>
          <Card
            src="https://images.ctfassets.net/qz1k4i0kbshi/1UhOYXlmHJjvRmBkW3fnql/95e6fe2651889e7b425b9fa608a90239/react-logo.png?w=600&h=338&q=50"
            title="React"
            designation="46 Hours"
          />

          <Card
            src="https://images.ctfassets.net/qz1k4i0kbshi/3U8kPEJ49gp05w2tWVjXmi/e7da5e036aa74feb988d5b9452c48797/gatsby-logo.png?w=600&h=338&q=50"
            title="Gatsby"
            designation="42 Hours"
          />
        </Flexbox> */}
        {/* Add team member cards or profiles here */}
        <div className="team-member">
          <a href="https://www.linkedin.com/in/sahil-mehta-1235b0158/" target="_blank" rel="noopener noreferrer">
          <img src={sahilmehta} alt="Sahil Mehta" />
          </a> 
          <h3>Sahil Mehta</h3>
          <p>Founder</p>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/sujal-bindra-869684286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src={sujal} alt="Sujal Bindra" />
          </a>
          <h3>Sujal Bindra</h3>
          <p>Co-founder</p>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/abhi-rawat-91143922b/" target="_blank" rel="noopener noreferrer">
          <img src={abhi} alt="Abhi Rawat" />
          </a>
          <h3>Abhi Rawat</h3>
          <p>Co-founder</p>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/vaibhav-uniyal-3a0336286/" target="_blank" rel="noopener noreferrer">
          <img src={vaibhav} alt="Vaibhav Uniyal" />
          </a>
          <h3>Vaibhav Uniyal</h3>
          <p>Co-founder</p>
        </div>
        {/* Repeat for each team member */}
      </div>

      <h2>Join Us</h2>
      <p>
        We invite you to explore our resources, connect with experts, and share your own experiences. Together, we can build a stronger, more informed community that values and prioritizes mental health.
      </p>
    </div>
  );
}

export default About;
