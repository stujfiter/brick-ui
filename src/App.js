import React, { Component } from 'react';
import PartList from './PartList.js';
import NewPartModal from './NewPartModal';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      parts: [],
      showNewPart: false
    };

    this.onAddPart = this.onAddPart.bind(this);
    this.onShowNewPart = this.onShowNewPart.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentDidMount() {
    fetch(`http://${process.env.REACT_APP_API_HOST}:5000/api/bricks`)
    .then(res => res.json())
    .then(results => { this.setState({parts: results})} );
  }

  onAddPart(partNumber, description, image, auth_code) {
    fetch(`http://${process.env.REACT_APP_API_HOST}:5000/api/bricks`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': auth_code
      },
      body: JSON.stringify({
        partNumber: partNumber,
        description: description,
        image: image
      })
    })

    this.setState({
      parts: this.state.parts.concat([{
        partNumber: partNumber,
        description: description,
        image: image
      }]),
      showNewPart: false
    });
  }

  onShowNewPart() {
    this.setState({showNewPart: true});
  }

  onCloseModal() {
    this.setState({showNewPart: false});
  }

  render() {
    return (
      <div id="root" className="App">
        <h1>Brick-by-Brick!</h1>
        <PartList parts={this.state.parts} onShowNewPart={this.onShowNewPart}/>
        {this.state.showNewPart && <NewPartModal onAddPart={this.onAddPart} onCloseModal={this.onCloseModal}/>}
      </div>
    );
  }
}

export default App;
