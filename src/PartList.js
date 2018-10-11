import React, { Component } from 'react';

class PartCard extends Component {
  constructor(props) {
    super(props);

    this.state={};
  }

  render() {
    var src;
    if (this.props.image) {
      src = this.props.image;
    } else {
      src = "/pile-o-bricks.jpeg"
    }
    return (
      <div className="part-card">
        <img src={src} alt="unavailable" width="180" height="180"/>
        <div>{this.props.partNumber}</div>
        <div className="truncate">{this.props.description}</div>
      </div>
    )
  }
}

class NewPartCard extends Component {
  constructor(props) {
    super(props);

    this.handleShowNewPart = this.handleShowNewPart.bind(this);
  }

  handleShowNewPart(event) {
    this.props.onShowNewPart();
  }

  render() {
    return (
    <div className="part-card" onClick={this.handleShowNewPart}>
      <img src="/AddNew.jpg" alt="new part" width="180" height="180" />
    </div>
    )}
}

class PartList extends Component {
  render() {
    const listItems = [];
    listItems.push(<NewPartCard key="newPartCard" onShowNewPart={this.props.onShowNewPart}/>);

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