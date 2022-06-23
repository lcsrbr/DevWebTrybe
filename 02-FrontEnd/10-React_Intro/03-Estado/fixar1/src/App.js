import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

function handleClick2() {
  console.log('Clicou no botão2!')
}

function handleClick3() {
  console.log('Clicou no botão3!')
}


class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
      <>
      <button onClick={handleClick}>Meu botão</button>
      <button onClick={handleClick2}>Meu botão2</button>
      <button onClick={handleClick3}>Meu botão3</button>
      </>
    )
  }
}


export default App;