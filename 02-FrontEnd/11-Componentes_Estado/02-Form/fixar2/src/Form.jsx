import React, { Component } from 'react'
import './App.css'

class Form extends Component {

  render() {
    const { handleChange, estadoV, nameV, idadeV, vaiComparecerV, rarityV } = this.props;


    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea name="estadoFavorito" value={ estadoV } onChange={handleChange} />
          </label>
          <label>
            Nome: 
          <input
            type="text"
            name="name"
            value={ nameV }
            onChange={handleChange}
          />
          </label>
          <label>
            Idade: 
          <input
            type="number"
            name="idade"
            value={ idadeV }
            onChange={handleChange}
          />
          </label>
          <label> 
            Vai comparecer? 
          <input
            type="checkbox"
            name="vaiComparecer"
            value={ vaiComparecerV }
            onChange={handleChange}
          />
          </label>
          <label> Presença: 
            <select
              id="rarity"
              name="rarity"
              onChange={ handleChange }
              value={ rarityV }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>

            </select>
            </label>
        </form>
      </div>
    )
  }
}

export default Form;