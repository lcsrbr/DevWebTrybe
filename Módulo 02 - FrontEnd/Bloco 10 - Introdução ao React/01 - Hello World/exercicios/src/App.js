import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <div className="App-div">
        <Header />
          <p>Com função</p>
          <ol> {arr.map((number) => Task(number))} </ol>
          <p>Sem função</p>
          <ol> {arr.map((number) => <li>{number}</li>)} </ol>
          <ol>{Content.map((item) => Task(item))}</ol>
        </div>
      </main>
    );
  }
}

export default App;