import React, { Component } from 'react';

class PartCard extends Component {
  constructor(props) {
    super(props);

    this.state={};
  }

  render() {
    return (
      <div className="part-card">
        <div><img src="https://i.imgur.com/0hHQDjFb.jpg" alt="2x2 Brick" /></div>
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