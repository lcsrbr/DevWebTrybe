import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li key = {value}>{value}</li>
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
          <ol> {arr.map((number) => <li key={number.toString()}>{number}</li>)} </ol>
          <Content/>
        <Footer />
        </div>
      </main>
    );
  }
}

export default App;