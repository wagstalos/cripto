import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ComponentNavBar from "./components/navBar";
import ComponentSocial from "./components/social";
import Coin from "./Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  //filter name
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  //filter symbol
  const filteredCoinsSymbol = coins.filter((symbol) =>
    symbol.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <ComponentNavBar />
      <div className="text-center mt-15">
        <ComponentSocial />
        {/* <a href="https://wpsgames.com.br/">wpsgames.com.br</a> */}
        <script src="https://widgets.coingecko.com/coingecko-coin-list-widget.js"></script>
      </div>

      <div className="App">
        <form>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search icon-search"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#0edf6c"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Pesquisar cripto"
          />
        </form>

        <div className="flex-container flex-wrap">
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
          {filteredCoinsSymbol.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
