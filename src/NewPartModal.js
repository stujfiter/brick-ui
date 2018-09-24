import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class NewPartModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            partNumber: '',
            partNumberValid: true,
            descriptionValid: true,
            uploadedFile: ''
        }

        this.handleAddPart = this.handleAddPart.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePartNumberChange = this.handlePartNumberChange.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleImageDrop = this.handleImageDrop.bind(this);
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
          this.props.onAddPart(this.state.partNumber, this.state.description, this.state.uploadedFile);
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

    handleImageDrop(files) {
        var reader = new FileReader();
        var self = this;
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
            console.log(reader.result);
            self.setState({uploadedFile: reader.result});
        }
    }

    render() {
        return (
          <div className="new-part-modal">
            <div className="new-part-content">
                <div className="new-part-close" onClick={this.handleCloseModal}>X</div>

                {(this.state.uploadedFile === '') && <Dropzone
                    className="new-part-dropzone"
                    accept="image/jpg, image/jpeg"
                    onDrop={this.handleImageDrop}>
                    <p>Drop an image or click to select a file to upload.</p>
                </Dropzone>}

                {!(this.state.uploadedFile === '') &&
                    <img src={this.state.uploadedFile} alt="Unavailable" width="500" height="500"/>
                }

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