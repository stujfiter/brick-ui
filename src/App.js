import React, { Component } from 'react';
import './App.css';

class NewPiece extends Component {
  constructor(props) {
    super(props);
    this.state = {description: ''}
    this.handleAddBrick = this.handleAddBrick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddBrick() {
    this.props.onAddBrick(this.state.description);
  }

  handleChange(event) {
    this.setState({description: event.target.value});
  }

  render() {
    return (
      <div id="newPiece">
        <input type="text" value={this.state.description} onChange={this.handleChange} />
        <button onClick={this.handleAddBrick} >Add</button>
      </div>
    );
  }
}

class BrickList extends Component {
  constructor(props) {
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

  onAddBrick(brick) {
    fetch("http://localhost:5000/api/bricks", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: brick
      })
    })

    this.setState({
      bricks: this.state.bricks.concat([{description: brick}])
    });
  }

  render() {
    const listItems = [];

    this.state.bricks.forEach((brick) => {
      listItems.push(
        <li key={brick.description}>{brick.description}</li>
      );
    });

    return (
      <div className="App">
        <NewPiece onAddBrick={this.onAddBrick}/>
        {listItems}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        Brick-by-Brick!
        <BrickList />
      </div>
    );
  }
}

export default App;
