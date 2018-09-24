import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class NewPartModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            partNumber: '',
            partNumberValid: true,
            descriptionValid: true
        }

        this.handleAddPart = this.handleAddPart.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePartNumberChange = this.handlePartNumberChange.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleAddPart() {
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
          this.props.onAddPart(this.state.partNumber, this.state.description);
        }
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }
    
    handlePartNumberChange(event) {
        this.setState({partNumber: event.target.value});
    }

    handleCloseModal(event) {
        this.props.onCloseModal();
    }

    render() {
        return (
          <div className="new-part-modal">
            <div className="new-part-content">
                <div className="new-part-close" onClick={this.handleCloseModal}>X</div>

                <Dropzone
                    className="new-part-dropzone"
                    accept="image/jpg">
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>

                <input type="text"
                    className={this.state.partNumberValid ? "valid" : "invalid"}
                    value={this.state.partNumber}
                    placeholder="Part Number"
                    onChange={this.handlePartNumberChange} />
                <br />
                <input type="text"
                    className={this.state.descriptionValid ? "valid": "invalid"} 
                    value={this.state.description} 
                    placeholder="Description" 
                    onChange={this.handleDescriptionChange} />

                <button className="new-part-add"
                    onClick={this.handleAddPart}>
                    Add
                </button>

            </div>
          </div>  
        );
    }
}

export default NewPartModal;