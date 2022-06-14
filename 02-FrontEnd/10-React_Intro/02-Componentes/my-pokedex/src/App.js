import './App.css';
import pokemons from './data';
import React from 'react';
import PropTypes from 'prop-types';


class Order extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.order;

    return (
      <li className="order">
        <img src = {image} alt={name}></img>
        <p> nome: {name} </p>
        <p>tipo: {type} </p>
        <p> peso: {averageWeight.value} {averageWeight.measurementUnit} </p>
      </li>
    );
  }
}

const items = pokemons.map((item) => (<Order key={ item.id } order = { item }/>));


class App extends React.Component  {
  render() {
  return (
    <div className="App">
      <ol> Pokedex </ol>
        {items}
    </div>
  );
}
}

pokemons.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};


export default App;
