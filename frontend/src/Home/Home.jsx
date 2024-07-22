import react from "react";
import Header from '../Header/Header.jsx';
import './Home.scss';

function Home() {
  return (
    <>
      <Header />
      <section id="intro">
        <h2 id="welcome">Welcome to <span id="cmp">COMPANION</span></h2>
        <p>your online therapist</p>
        <br />
        <p>The first step for healing your Mental Health</p>

      </section>
      <section id="our-mission">
        <h2 id="mission">Our Mission</h2>
        <p id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Dolorem tenetur molestias nemo consequuntur enim officiis, 
          eaque aut eum quae non, ad explicabo, repudiandae quos vel. 
          Voluptatibus eius repudiandae esse perspiciatis.</p>
      </section>
    </>
  )
}

export default Home