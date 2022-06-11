import './App.css';
import React from 'react';


const hello = <h1>Hello JSX!</h1>

const testeVar = <p>isto <strong>deve</strong> ser impresso</p>

const testeFunc = () => <p>isto <em>também</em> deve ser impresso</p>

const Heading = () => <strong> Este é o cabecalho</strong>

const Repete = () => <h1>este vai repetir 5x</h1>

class Descricao extends React.Component {
  render () { 
    return <p>repete de outra forma</p> 
}
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading></Heading>
        <p>Hello World!</p>
        {hello}
        {testeVar}
        {testeFunc()}
        <Descricao/>
        <Descricao/>
        <p>2 + 2 é igual a {2+2}</p>
        <Repete/>
        <Repete/>
        <Repete/>
        <Repete/>
        <Repete/>
      </header>
    </div>
  );
}

export default App;