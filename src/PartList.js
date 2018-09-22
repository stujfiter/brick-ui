import React, { Component } from 'react';

class PartCard extends Component {
  constructor(props) {
    super(props);

    this.state={};
  }

  render() {
    var src;
    if (this.props.image) {
      src = "data:image/jpeg;base64, "+this.props.image;
    } else {
      src = "/pile-o-bricks.jpeg"
    }
    return (
      <div className="part-card">
        <img src={src} alt="unavailable" width="180" height="180"/>
        <div>{this.props.partNumber}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

class PartList extends Component {
    render() {
      const listItems = [];
  
      this.props.parts.forEach((part) => {
        listItems.push(
          <PartCard 
            key={part.partNumber} 
            partNumber={part.partNumber} 
            description={part.description}
            image={part.image}
          />
        );
      });
  
      return (
        <div className="part-list">
          {listItems}
        </div>
      );
    }
  }

  export default PartList;