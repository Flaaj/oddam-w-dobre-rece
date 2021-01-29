import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Button = ({ text, isClickable = false }) => {
    return (
        <div className="button">
            {isClickable ? (
                <Link className="button__link" href={href}>
                    { text }
                </Link>
            ) : (
                    { text }
                )}
        </div>
    );
};

export default Button;
