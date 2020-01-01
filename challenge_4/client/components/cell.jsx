import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div className="col">
                <div className="circle" onClick={() => this.props.handlePushColumn(this.props.column)}>
                    {this.props.value + " || " + this.props.column}
                </div>
            </div>
        )
    }
}

export default Cell;