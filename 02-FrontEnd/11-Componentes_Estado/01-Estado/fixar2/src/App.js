import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  handleClick2() {

    console.log(this)
    console.log('Clicou 2!')
  }

  handleClick3() {

    console.log(this)
    console.log('Clicou 3!')
  }

  render() {
    return (
      <>
      <button onClick={this.handleClick}>Meu botão</button>
      <button onClick={this.handleClick2}>Meu botão2</button>
      <button onClick={this.handleClick3}>Meu botão3</button>
      </>
    )
  }
}

export default App;