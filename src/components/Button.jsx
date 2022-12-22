import React from "react";
import styles from "../style";

const Button = (props) => {
  return (
    <a
      href="#getstarted"
      className={`block py-4 px-6 bg-blue-gradient font-poppins font-medium text-lg text-primary outline-none ${props.styles}`}
    >
      Get Started
    </a>
  );
};

export default Button;
