import React from "react";
import './Card.scss';
import { NavLink } from "react-router-dom";

const Card = ({ src, title,link }) => {
    return (
      <div className="card">
        <NavLink to={link}>
        <img src={src} alt="image" />
        </NavLink>
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