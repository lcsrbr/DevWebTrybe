// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  async componentDidMount() {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const requestObject = await api.json();
    this.setState({characters: requestObject.results})
      }

      render() {
        const { characters } = this.state;
        return (
          <div className="App">
            <h1>
              Ricky and Morty Characters:
            </h1>
            <div className="body">
              {characters.map((character) => {
                return (
                  <div className="container" key={character.name}>
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name}/>
                  </div>
                )
              })}
            </div>
          </div>
        );
      }
    }

export default App;
