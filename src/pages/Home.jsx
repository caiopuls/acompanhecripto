import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

import axios from 'axios';
import Coin from '../components/Coin';
import '../styles/Home.scss';

function Home() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
          )
          .then(res => {
            setCoins(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);
    
      const handleChange = e => {
        setSearch(e.target.value);
      };
    
      const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );

    return (
        <div id="home-page">
            <Header />

            <div className='coin-app'>
      <div className='coin-search'>
        <h1 className='coin-text'>Welcome to TrackCripto</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      <div className="nav">
        <th className="coinname">Coin Name</th>
        <th className="price">Price</th>
        <th className="volume">Volume</th>
        <th className="pchange">Now</th>
        <th className="mcap">Market Capital</th>
      </div>
      {filteredCoins.map(coin => {
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
    )
}

export default Home
