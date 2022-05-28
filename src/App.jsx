import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <body>
      <div className="App">
        <header className="header _container">
          <div className="header__logo">
            Crypto Converter
            {/* Do as link */}
          </div>
          <nav className="header__nav">
            <ul class="menu__list">
              <li class="menu__item menu__item_active">
                <a href="" class="menu__link">
                  Exchange
                </a>
              </li>
              <li class="menu__item">
                <a href="" class="menu__link">
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="page">
          <div className="page__main-block _container">
            <div className="main-block__body">
              <h1 className="main-block__text">Please choose currencies </h1>
              <div className="main-block__currencies">
                <select>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="USD">USD</option>
                </select>
                <input type="text" value={"1"} class="currencies__from" />
                <img src="img/exchange/1.svg" alt="exchange" />{" "}
                <select>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="USD">USD</option>
                </select>
                <input type="text" value={"1"} class="currencies__to" />
                <button className="currencies__button button">Convert</button>
              </div>
            </div>
            <div className="main-block__plot">plot</div>
          </div>
        </main>
        <footer className="footer">footer</footer>
      </div>
    </body>
  );
}

export default App;
