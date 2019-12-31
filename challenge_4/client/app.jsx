import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import Circle from './components/circle.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board:
        [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
        ]
    }
  }

  pushToColumn(r, c) {
    console.log(`Click at ${r} and ${c}`);
  }

  render() {
    let pushToColumn = this.pushToColumn.bind(this);
    const boardView = [];

    for (let i = 0; i < 6; i++) {
      let row = [];
      for (let j = 0; j < 7; j++) {
        row.push(
          <div className="col">
            <Circle x={i} y={j} key={`row-${i} col-${j}`} handlePushColumn={pushToColumn} />
          </div>
        );
      }

      boardView.push(
        <div className="row my-2" key={`row-${i}`}> {row}</div >
      );
    }
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