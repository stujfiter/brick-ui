import React, { Component } from 'react';

class BrickList extends Component {
    render() {
      const listItems = [];
  
      this.props.bricks.forEach((brick) => {
        listItems.push(
          <tr key={brick.description}>
          <td>{brick.partNumber}</td>
          <td>{brick.description}</td>
          </tr>
        );
      });
  
      return (
        <div className="brick-list">
          <table>
            <tr>
              <th>Part Number</th>
              <th>Description</th>
            </tr>
            {listItems}
          </table>
        </div>
      );
    }
  }

  export default BrickList;