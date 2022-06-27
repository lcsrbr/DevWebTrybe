import React, { Component } from 'react'
import './App.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange({ target }) {
    const { name, idade, vaiComparecer, age} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
      [idade]: value,
      [vaiComparecer]: value,
      [age]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer}
            onChange={this.handleChange}
          />
            <select
              id="age"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.age }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>

            </select>
        </form>
      </div>
    )
  }
}

export default Form;