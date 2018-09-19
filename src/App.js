import React, { Component } from 'react';
import PartList from './PartList.js'
import NewPart from './NewPart.js'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      parts: []
    };

    this.onAddPart = this.onAddPart.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/bricks")
    .then(res => res.json())
    .then(results => { this.setState({parts: results})} );
  }

  onAddPart(partNumber, description) {
    fetch("http://localhost:5000/api/bricks", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        partNumber: partNumber,
        description: description
      })
    })

    this.setState({
      parts: this.state.parts.concat([{
        partNumber: partNumber,
        description: description

      }])
    });
  }

  render() {
    return (
      <div id="root" className="App">
        <h1>Brick-by-Brick!</h1>
        <NewPart onAddPart={this.onAddPart}/>
        <PartList parts={this.state.parts}/>
      </div>
    );
  }
}

export default App;
