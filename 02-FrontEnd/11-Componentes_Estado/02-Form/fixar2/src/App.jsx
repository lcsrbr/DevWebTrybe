import React from 'react';
import Button from './Button';
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      numeroDeCliques: 0,
      estadoFavorito: '',
      name: '',
      idade: 0,
      vaiComparecer: false,
      rarity: '',
    };

  }

  handleChange({ target }) {
    const { name, idade, vaiComparecer, rarity} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
      [idade]: value,
      [vaiComparecer]: value,
      [rarity]: value,
    });
  }
  /* A função de alterar o estado é definida no componente pai*/
  handleClick() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  /* O componente filho recebe a função de alterar estado do pai via `props`,
     na forma de uma callback */
  render() {
    const { numeroDeCliques, estadoFavorito, name, idade, vaiComparecer , rarity } = this.state;

    return (
      <div>
        <h1>Formulário!</h1>
        <Form
        handleChange = { this.handleChange }
        estadoV = { estadoFavorito }
        nameV = { name }
        idadeV = { idade }
        vaiComparecerV = { vaiComparecer }
        rarity = { rarity }
         />
        <h1>Cliques!</h1>
        <h2>{`${numeroDeCliques} cliques!`}</h2>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App