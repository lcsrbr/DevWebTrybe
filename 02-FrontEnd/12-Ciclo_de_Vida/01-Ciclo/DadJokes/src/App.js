
import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);


    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      {loading: true}, //primeiro parametro
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
      loading: false,
    }) 
  })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    const { jokeObj } = this.state;
    this.setState((previous) => ({
      storedJokes: [ 
        ...previous.storedJokes,
        jokeObj,
      ],
    }),)
    this.fetchJoke()
  }

  renderJokeElement () {
    const { jokeObj } = this.state;
    return (
    <div>
      <p>{ jokeObj.joke} </p>
      <button type="button" onClick={this.saveJoke}> Salvar Piada! </button>
    </div>
    )
  }

  render = () =>  {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    console.log('Renderizou')
    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>
        <div>
      { !loading ?  this.renderJokeElement() : loadingElement }
</div>
      </div>
    );
  }
}

export default DadJoke;