import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import decoration from "../../../assets/decoration.png";

const ButtonRow = () => (
    <>
        <Button />
        <Button />
    </>
);
const Header = () => {
    return (
        <section className="header container">
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

            <div className="header__decorated-heading">
                <h2 className="header__heading">
                    <span>Zacznij pomagać!</span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                </h2>
                <img
                    className="header__decoration"
                    src={decoration}
                    alt="decoration"
                />
                <div className="header__buttons">
                    <Button text="Oddaj rzeczy"/>
                    <Button text="Zorganizuj zbiorkę"/>
                </div>
            </div>
        </section>
    );
};

export default Header;
