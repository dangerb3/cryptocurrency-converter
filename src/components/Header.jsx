import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export const Header = () => {
  const chartData = useSelector((state) => state.exchange.chartData);
  const dispatch = useDispatch();
  const location = useLocation();

  const navigate = useNavigate();

  const [exchangeLinkClass, setExchangeLinkClass] = useState(
    "menu__item menu__item_active"
  );
  const [portfolioLinkClass, setPortfolioLinkClass] = useState("menu__item");

  useEffect(() => {
    if (location.pathname === "/exchange") {
      setExchangeLinkClass("menu__item menu__item_active");
      setPortfolioLinkClass("menu__item");
    } else {
      setExchangeLinkClass("menu__item");
      setPortfolioLinkClass("menu__item menu__item_active");
    }
  }, [location]);

  return (
    <header className="header _container">
      <div className="header__logo">
        <a
          role="button"
          onClick={() => navigate("/exchange")}
          className="header__link"
        >
          Crypto Converter
        </a>{" "}
      </div>
      <nav className="header__nav">
        <ul className="menu__list">
          <li className={exchangeLinkClass}>
            <a
              role="button"
              onClick={() => navigate("/exchange")}
              className="menu__link"
            >
              Exchange
            </a>
          </li>
          <li className={portfolioLinkClass}>
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
