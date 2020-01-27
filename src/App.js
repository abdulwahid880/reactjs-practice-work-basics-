import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>this is my first react app </h1>
       <Person name="Max" age = "28"/>
       <Person name="abc" age = "82"/>
       <Person name="Manu" age = "2"/>
       <Person name="Maxy" age = "8"/>
      </div>
    );
  }
}

export default App;
