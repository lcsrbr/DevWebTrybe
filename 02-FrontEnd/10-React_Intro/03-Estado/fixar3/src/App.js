import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

  }

  handleClick() {
    this.setState(({ numeroDeCliques }) => ({ numeroDeCliques: numeroDeCliques + 1 }), console.log(`botão1 ${this.alteraCor(this.state.numeroDeCliques)}`));
  }
  handleClick2() {
    this.setState((estadoAnterior) => ({ numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1 }), console.log(`botão2 ${this.alteraCor(this.state.numeroDeCliques2)}`))
  }
  handleClick3() {
    this.setState((estadoAnterior) => ({ numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1 }), console.log(`botão3 ${this.alteraCor(this.state.numeroDeCliques3)}`))
  }

  alteraCor(cor) {
    return cor % 2 !== 0 ? 'green' : 'grey';
  }

  alteraTexto(texto) {
    return texto % 2 === 0 ? 'par' : 'impar';

  }

  render() {
    const { numeroDeCliques, numeroDeCliques2, numeroDeCliques3 } = this.state;

    return (
      <>
        <button onClick={this.handleClick} style={{ backgroundColor: this.alteraCor(numeroDeCliques) }}> {this.alteraTexto(numeroDeCliques)} | {this.state.numeroDeCliques}</button>
        <button onClick={this.handleClick2} style={{ backgroundColor: this.alteraCor(numeroDeCliques2) }}> {this.alteraTexto(numeroDeCliques2)} | {this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3} style={{ backgroundColor: this.alteraCor(numeroDeCliques3) }}> {this.alteraTexto(numeroDeCliques3)} | {this.state.numeroDeCliques3}</button>
      </>
    )

  }
}

export default App;

