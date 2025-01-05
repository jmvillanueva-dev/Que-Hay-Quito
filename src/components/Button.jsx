import React from "react";
import "./../styles/button.css";

const Button = ({ variant, children, onClick }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
