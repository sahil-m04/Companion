import React from "react";
import './Card.scss';

const Flexbox = (props) => {
    return <div className="flex">{props.children}</div>;
  };

export default Flexbox;