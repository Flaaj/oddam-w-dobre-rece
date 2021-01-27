import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header container">
            <div className="header__menu">
                <ul className="header__authorization">
                    <li className="header__login">
                        <Link to="/logowanie" className="header__link">
                            Zaloguj
                        </Link>
                    </li>
                    <li className="header__register">
                        <Link to="/rejestracja" className="header__link">
                            Załóż konto
                        </Link>
                    </li>
                </ul>
                <ul className="header__navigation">
                    <li className="header__item header__item--active">
                        <a href="" className="header__link">
                            Start
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="" className="header__link">
                            O co chodzi?
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="" className="header__link">
                            O nas
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="" className="header__link">
                            Fundacje i organizacje
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="" className="header__link">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
