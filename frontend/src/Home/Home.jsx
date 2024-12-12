import React from 'react';
import './Home.scss';
import Card from '../Card/Card';
import Flexbox from '../Card/Flexbox';
import books from '../assets/books.jpeg';
import expertchat from '../assets/expert chat.jpeg';
import communityblogs from '../assets/communityblogs.jpeg';
import accessibility from '../assets/accesibility.jpeg';
import support from '../assets/support.jpeg';
import education from '../assets/education.jpeg';

function Home() {
  return (
    <div className='home-container'>
      <div className="section" id="intro">
        <h2 id="welcome">
          Welcome to <span id='cmp'>COMPANION</span>
        </h2>
        <p>your online therapist</p>
        <br />
        <p>The first step for healing your Mental Health</p>
      </div>

      <div className="section" id="our-mission">
        <div className="mission-content">
          <h2 id="mission">Our Mission</h2>
          <p id="para">
            At <span id='cmp1'>COMPANION</span>, our mission is to provide comprehensive support and resources for mental health and well-being. <br />
            We believe in the importance of mental health for a fulfilling and balanced life, and we are dedicated to making support accessible to everyone. Our goal is to create a safe and welcoming space where individuals can find the help they need, whether through expert advice, community support, or valuable information.
          </p>
        </div>

        <h2>What We Offer</h2>
        <div className="offerings">
          <Flexbox>
            <Card
              src={books}
              title="Books and Resources"
              link="/Bookrecommender"
            />

            <Card
              src={expertchat}
              title="Expert Chat"
              link="/ChatHome"
            />

            <Card
              src={communityblogs}
              title="Community Blogs"
              link="/Blog/Blogs"
            />
          </Flexbox>
        </div>

        <h2>Our Commitment</h2>
        <div className="commitment">
          <Flexbox>
            <Card
              src={accessibility}
              title="Accessibility"
            />

            <Card
              src={support}
              title="Support"
            />

            <Card
              src={education}
              title="Education"
            />
          </Flexbox>
        </div>

        <div className="join-us">
          <h2>Join Us</h2>
          <p>
            We invite you to explore our resources, connect with experts, and share your own experiences. Together, we can build a stronger, more informed community that values and prioritizes mental health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
