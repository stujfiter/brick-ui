import React, { Component } from 'react';
import BrickList from './BrickList.js'
import NewPart from './NewPart.js'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      bricks: []
    };

    this.onAddBrick = this.onAddBrick.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/bricks")
    .then(res => res.json())
    .then(results => { this.setState({bricks: results})} );
  }

  onAddBrick(partNumber, description) {
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
      bricks: this.state.bricks.concat([{
        partNumber: partNumber,
        description: description

      }])
    });
  }

  render() {
    return (
      <div id="root" className="App">
        <h1>Brick-by-Brick!</h1>
        <NewPart onAddBrick={this.onAddBrick}/>
        <BrickList bricks={this.state.bricks}/>
      </div>
    );
  }
}

export default App;
