import "./App.scss";
import { Exchange } from "./pages/Exchange";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
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
      {/* <footer className="footer">footer</footer> */}
    </div>
  );
}

export default App;
