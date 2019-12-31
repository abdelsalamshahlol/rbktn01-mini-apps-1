import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import Circle from './components/circle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pushToColumn = this.pushToColumn.bind(this);
    this.state = {
      board: [
        [
          <Circle row={0} column={0} key={`rc-00`} handlePushColumn={this.pushToColumn} />,
          <Circle row={0} column={1} key={`rc-01`} handlePushColumn={this.pushToColumn} />,
          <Circle row={0} column={2} key={`rc-02`} handlePushColumn={this.pushToColumn} />,
          <Circle row={0} column={3} key={`rc-03`} handlePushColumn={this.pushToColumn} />,
          <Circle row={0} column={4} key={`rc-04`} handlePushColumn={this.pushToColumn} />,
          <Circle row={0} column={5} key={`rc-05`} handlePushColumn={this.pushToColumn} />,
          <Circle row={0} column={6} key={`rc-06`} handlePushColumn={this.pushToColumn} />
        ],
        [
          <Circle row={1} column={0} key={`rc-10`} handlePushColumn={this.pushToColumn} />,
          <Circle row={1} column={1} key={`rc-11`} handlePushColumn={this.pushToColumn} />,
          <Circle row={1} column={2} key={`rc-12`} handlePushColumn={this.pushToColumn} />,
          <Circle row={1} column={3} key={`rc-13`} handlePushColumn={this.pushToColumn} />,
          <Circle row={1} column={4} key={`rc-14`} handlePushColumn={this.pushToColumn} />,
          <Circle row={1} column={5} key={`rc-15`} handlePushColumn={this.pushToColumn} />,
          <Circle row={1} column={6} key={`rc-16`} handlePushColumn={this.pushToColumn} />
        ],
        [
          <Circle row={2} column={0} key={`rc-20`} handlePushColumn={this.pushToColumn} />,
          <Circle row={2} column={1} key={`rc-21`} handlePushColumn={this.pushToColumn} />,
          <Circle row={2} column={2} key={`rc-22`} handlePushColumn={this.pushToColumn} />,
          <Circle row={2} column={3} key={`rc-23`} handlePushColumn={this.pushToColumn} />,
          <Circle row={2} column={4} key={`rc-24`} handlePushColumn={this.pushToColumn} />,
          <Circle row={2} column={5} key={`rc-25`} handlePushColumn={this.pushToColumn} />,
          <Circle row={2} column={6} key={`rc-26`} handlePushColumn={this.pushToColumn} />
        ],
        [
          <Circle row={3} column={0} key={`rc-30`} handlePushColumn={this.pushToColumn} />,
          <Circle row={3} column={1} key={`rc-31`} handlePushColumn={this.pushToColumn} />,
          <Circle row={3} column={2} key={`rc-32`} handlePushColumn={this.pushToColumn} />,
          <Circle row={3} column={3} key={`rc-33`} handlePushColumn={this.pushToColumn} />,
          <Circle row={3} column={4} key={`rc-34`} handlePushColumn={this.pushToColumn} />,
          <Circle row={3} column={5} key={`rc-35`} handlePushColumn={this.pushToColumn} />,
          <Circle row={3} column={6} key={`rc-36`} handlePushColumn={this.pushToColumn} />
        ],
        [
          <Circle row={4} column={0} key={`rc-40`} handlePushColumn={this.pushToColumn} />,
          <Circle row={4} column={1} key={`rc-41`} handlePushColumn={this.pushToColumn} />,
          <Circle row={4} column={2} key={`rc-42`} handlePushColumn={this.pushToColumn} />,
          <Circle row={4} column={3} key={`rc-43`} handlePushColumn={this.pushToColumn} />,
          <Circle row={4} column={4} key={`rc-44`} handlePushColumn={this.pushToColumn} />,
          <Circle row={4} column={5} key={`rc-45`} handlePushColumn={this.pushToColumn} />,
          <Circle row={4} column={6} key={`rc-46`} handlePushColumn={this.pushToColumn} />
        ],
        [
          <Circle row={5} column={0} color={} key={`rc-50`} handlePushColumn={this.pushToColumn} />,
          <Circle row={5} column={1} color={} key={`rc-51`} handlePushColumn={this.pushToColumn} />,
          <Circle row={5} column={2} color={} key={`rc-52`} handlePushColumn={this.pushToColumn} />,
          <Circle row={5} column={3} color={} key={`rc-53`} handlePushColumn={this.pushToColumn} />,
          <Circle row={5} column={4} color={} key={`rc-54`} handlePushColumn={this.pushToColumn} />,
          <Circle row={5} column={5} color={} key={`rc-55`} handlePushColumn={this.pushToColumn} />,
          <Circle row={5} column={6} color={} key={`rc-56`} handlePushColumn={this.pushToColumn} />
        ],
      ]
    }
  }

  pushToColumn(r, c) {
    //access board on the state and change the color of the circle
    console.log(`Click at ${r} and ${c}`);
    // this.setState
  }

  render() {
    const boardView = this.state.board.map((row, i) => {
      return (
        <div className="row my-2" key={`row-${i}`}>
          {row}
        </div>
      );
    });
    return (
      <div className="container board-container" >
        {boardView}
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)