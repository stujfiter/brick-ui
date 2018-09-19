import React, { Component } from 'react'

class NewPart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        description: '',
        partNumber: '',
        partNumberValid: true,
        descriptionValid: true
      }
  
      this.handleAddBrick = this.handleAddBrick.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handlePartNumberChange = this.handlePartNumberChange.bind(this);
    }
  
    handleAddBrick() {
      var partNumberValid = true;
      var descriptionValid = true;

      if (this.state.partNumber.trim() === '') {
        this.setState({partNumberValid: false});
        partNumberValid = false;
      } else {
        this.setState({partNumberValid: true});
      }

      if (this.state.description.trim() === '') {
        this.setState({descriptionValid: false});
        descriptionValid = false;
      } else {
        this.setState({descriptionValid: true});
      }
      
      if (partNumberValid && descriptionValid) {
        this.props.onAddBrick(this.state.partNumber, this.state.description);
      }
    }
  
    handleDescriptionChange(event) {
      this.setState({description: event.target.value});
    }
    
    handlePartNumberChange(event) {
      this.setState({partNumber: event.target.value});
    }
  
    render() {
      return (
        <div id="newPart">
          <input type="text"
            className={this.state.partNumberValid ? "valid" : "invalid"}
            value={this.state.partNumber}
            placeholder="Part Number"
            onChange={this.handlePartNumberChange} />
  
          <input type="text"
            className={this.state.descriptionValid ? "valid": "invalid"} 
            value={this.state.description} 
            placeholder="Description" 
            onChange={this.handleDescriptionChange} />
  
          <button onClick={this.handleAddBrick} >Add</button>
        </div>
      );
    }
  }

  export default NewPart;