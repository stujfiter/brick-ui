import React, { Component } from 'react';

class BrickItem extends Component {
  constructor(props) {
    super(props);

    this.state={};
  }

  render() {
    return (
      <div className="brick-item">
        <div className="brick-item-pic"><img src="https://i.imgur.com/0hHQDjFb.jpg" alt="2x2 Brick" /></div>
        <div className="brick-item-part">{this.props.partNumber}</div>
        <div className="brick-item-desc">{this.props.description}</div>
      </div>
    )
  }
}

class BrickList extends Component {
    render() {
      const listItems = [];
  
      this.props.bricks.forEach((brick) => {
        listItems.push(
          <BrickItem 
            key={brick.partNumber} 
            partNumber={brick.partNumber} 
            description={brick.description} 
          />
        );
      });
  
      return (
        <div className="brick-list">
          {listItems}
        </div>
      );
    }
  }

  export default BrickList;