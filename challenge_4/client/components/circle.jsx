import React from 'react';
import ReactDom from 'react-dom';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    }
  }

  render() {
    return (
      <div className="circle" onClick={() => this.props.handlePushColumn(this.props.row, this.props.column)}>
        {/* {this.props.x + " | " + this.props.y} */}
        {this.props.value}
      </div>
    )
  }
}

export default Circle;