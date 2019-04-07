import React, { Component } from 'react';

import './App.css';
import Person from './Components/Person'
import NextPageButton from './Components/NextPageButton'

class App extends Component {
  render() {
    return (
        <div>
        <Person/>
          <NextPageButton>Click Me!</NextPageButton>
        </div>
    );
  }
}

export default App;
