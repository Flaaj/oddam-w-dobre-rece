import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Button = ({ text, href }) => {
    return (
        <div className="button">
            {href ? (
                <Link className="button__link" to={href}>
                    {text}
                </Link>
            ) : (
                <a href="">{ text }</a>
            )}
        </div>
    );
};

export default Button;
