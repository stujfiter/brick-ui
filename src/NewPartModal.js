import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class NewPartModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: '',
            partNumber: '',
            authCode: '',
            partNumberValid: true,
            descriptionValid: true,
            authCodeValid: '',
            uploadedFile: ''
        }

        this.handleAddPart = this.handleAddPart.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handlePartNumberChange = this.handlePartNumberChange.bind(this);
        this.handleAuthCodeChange = this.handleAuthCodeChange.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleImageDrop = this.handleImageDrop.bind(this);
    }

    handleAddPart() {
        var partNumberValid = true;
        var descriptionValid = true;
        var authCodeValid = true;
  
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

        if (this.state.authCode.trim() === '') {
          this.setState({authCodeValid: false});
          authCodeValid = false;
        } else {
          this.setState({authCodeValid: true});
        }
        
        if (partNumberValid && descriptionValid && authCodeValid) {
          this.props.onAddPart(this.state.partNumber, this.state.description, this.state.uploadedFile, this.state.authCode);
        }
    }

    handleDescriptionChange(event) {
        this.setState({description: event.target.value});
    }
    
    handlePartNumberChange(event) {
        this.setState({partNumber: event.target.value});
    }

    handleAuthCodeChange(event) {
        this.setState({authCode: event.target.value});
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
                    onChange={this.handlePartNumberChange} 
                    maxLength="50"/>
                <br />
                <input type="text"
                    className={this.state.descriptionValid ? "valid": "invalid"} 
                    value={this.state.description} 
                    placeholder="Description" 
                    onChange={this.handleDescriptionChange} 
                    maxLength="100" />
                
                <br />
                <input type="password"
                    clasName={this.state.authCodeValid ? "valid": "invalid"}
                    placeholder="Secret Code"
                    onChange={this.handleAuthCodeChange}
                    maxLength="20" />

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