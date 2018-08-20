import React, { Component } from 'react';
import './App.css';

class NewPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      partNumber: ''
    }

    this.handleAddBrick = this.handleAddBrick.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePartNumberChange = this.handlePartNumberChange.bind(this);
  }

  handleAddBrick() {
    this.props.onAddBrick(this.state.partNumber, this.state.description);
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }
  
  handlePartNumberChange(event) {
    this.setState({partNumber: event.target.value});
  }

  render() {
    return (
      <div id="newPiece">
        <input type="text"
          value={this.state.partNumber}
          placeholder="Part Number"
          onChange={this.handlePartNumberChange} />

        <input type="text" 
          value={this.state.description} 
          placeholder="Description" 
          onChange={this.handleDescriptionChange} />

        <button onClick={this.handleAddBrick} >Add</button>
      </div>
    );
  }
}

class BrickList extends Component {
  render() {
    const listItems = [];

    this.props.bricks.forEach((brick) => {
      listItems.push(
        <tr key={brick.description}>
        <td>{brick.partNumber}</td>
        <td>{brick.description}</td>
        </tr>
      );
    });

    return (
      <div className="brick-list">
        <table>
          <tr>
            <th>Part Number</th>
            <th>Description</th>
          </tr>
          {listItems}
        </table>
      </div>
    );
  }
}

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
        <NewPiece onAddBrick={this.onAddBrick}/>
        <BrickList bricks={this.state.bricks}/>
      </div>
    );
  }
}

export default App;
