import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div className="col">
                <div className={(this.props.value === 1 ? ' redCell ' : this.props.value === 2 ? ' yellowCell' : '')  + " cell"}
                        onClick={() => this.props.handlePushColumn(this.props.column)}>
                </div>
            </div>
        )
    }
}

export default Cell;