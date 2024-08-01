import React from "react";
import './Card.scss';

const Card = ({ src, title, duration }) => {
    return (
      <div className="card">
        <img src={src} alt="course image" />
        <footer>
          <h2>{title}</h2>
          <p>{duration}</p>
        </footer>
      </div>
    );
  };
  
  const Flexbox = (props) => {
    return <div className="flex">{props.children}</div>;
  };
  
export default Card;