import React, { Component } from 'react';
import './App.css';

class Piece extends Component {
  render() {
    return (
      <li>{this.props.description}</li>
    );
  }
}

class BrickList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/bricks")
    .then(res => res.json())
    .then(results => { this.setState({pieces: results})} );

    console.log("state", this.state.pieces);
  }

  render() {
    const listItems = [];

    this.state.pieces.forEach((piece) => {
      listItems.push(
        <Piece description={piece.description} />
      );
    });

    return (
      <div className="App">
        Brick-by-Brick!
        {listItems}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
    <BrickList />
    );
  }
}

export default App;
