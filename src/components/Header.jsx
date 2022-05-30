import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header _container">
      <div className="header__logo">
        Crypto Converter
        {/* Do as link */}
      </div>
      <nav className="header__nav">
        <ul className="menu__list">
          <li className="menu__item menu__item_active">
            <a
              role="button"
              onClick={() => navigate("/exchange")}
              className="menu__link"
            >
              Exchange
            </a>
          </li>
          <li className="menu__item">
            <a
              role="button"
              onClick={() => navigate("/portfolio")}
              className="menu__link"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
