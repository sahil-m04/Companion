import React from "react";
import './Card.scss';

const Card = ({ src, title }) => {
    return (
      <div className="card">
        <img src={src} alt="image" />
        <footer>
          <h2>{title}</h2>
        </footer>
      </div>
    );
  };
  
  const Flexbox = (props) => {
    return <div className="flex">{props.children}</div>;
  };
  
export default Card;