import React from 'react';
import './About.scss';
import Card from '../Card/Card';
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
          
          {/* Add team member cards or profiles here */}
          <div className="team-member">
            <img src="[team_member_photo]" alt="[Team Member Name]" />
            <h3>[Team Member Name]</h3>
            <p>[Role]</p>
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
