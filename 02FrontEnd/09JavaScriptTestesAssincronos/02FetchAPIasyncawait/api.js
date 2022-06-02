// const fetch = require('node-fetch')
const API_URL = `https://api.coincap.io/v2/assets`;
const crypto = document.getElementById('crypto');

const fetchCryptos = async () => {
  try {
    const response = await fetch(API_URL)
    const { data } = await response.json()
    const result = data
      .filter((_, index) => index <= 9)
      .map(({ id, symbol, priceUsd }) => `${id} ${symbol} ${(+priceUsd).toFixed(3)}`)
    result.forEach((value) => {
      const newP = document.createElement('p')
      newP.innerText = value;
      crypto.appendChild(newP);
    })
  } catch (error) {
    console.log(error);
  }
};
fetchCryptos();