import React, { Component } from 'react';
import './App.css';

class App extends Component {
  search() {
    fetch('food').then(res => {
      console.log(res.text());
    });
  }

  render() {
    return <h1 onClick={this.search.bind(this)}>My name is Uzumaki Naruto.</h1>;
  }
}

export default App;
