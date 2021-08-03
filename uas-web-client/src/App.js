import React, { Component } from 'react';
import './App.css';
import Result from './Result';
import Search from './Search';

class App extends Component {
  state = {
    query: '',
    results: [
      'Test Data 1',
      'TestData2',
      'TEST DATA 3',
    ],
  }

  handleSubmit = (query) => {
    this.setState({query: query});
  }

  render() {
    return (
      <div className="App">
        <h1>uas</h1>
        <Search handleSubmit={this.handleSubmit} />
        {this.state.query.length > 0 && 
          <Result query={this.state.query} results={this.state.results} />}
      </div>
    );
  }
}

export default App;
