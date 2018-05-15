import React, { Component } from 'react';
import MarkdownBuilder from './containers/MarkdownBuilder/MarkdownBuilder';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkdownBuilder />
      </div>
    );
  }
}

export default App;
