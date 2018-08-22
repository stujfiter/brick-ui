import React, { Component } from 'react'

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

  export default NewPiece;