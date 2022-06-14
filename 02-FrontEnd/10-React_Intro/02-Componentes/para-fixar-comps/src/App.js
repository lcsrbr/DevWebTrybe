// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './order';

class App extends React.Component {
  render() {
    const products = [
    {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    },
    {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    }
  ];
  const items = products.map((item) => (<Order key={ item.id } order = { item }/>));

    return (
      <div className="App">
        <ol> Orders recently created </ol>
        {items}
      </div>
    );
  }
}

export default App;