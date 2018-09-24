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
    }

    render() {
        return (
          <div className="new-part-modal">
            <div className="new-part-content">
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

                <div className="new-part-close">
                    X
                </div>
            </div>
            
          </div>  
        );
    }
}

export default NewPartModal;