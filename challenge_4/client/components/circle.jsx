import React from 'react';
import ReactDom from 'react-dom';

class Circle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="circle">
        {/* {this.props.x + " | " + this.props.y} */}
      </div>
    )
  }
}

export default Circle;