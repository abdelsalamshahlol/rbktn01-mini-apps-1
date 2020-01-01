import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white'
    }
  }

  render() {
    return (
      <div className="circle" onClick={() => this.props.handlePushColumn(this.props.row, this.props.column)}>
         {this.props.row + " | " + this.props.column}
        {/*{this.props.value}*/}
      </div>
    )
  }
}

export default Cell;