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
    //access board on the state and change the color of the circle
    console.log(`Click at ${r} and ${c}`);
    this.state.board[r][c] = 1;
    console.log(this.state.board)
  }

  render() {
    let pushToColumn = this.pushToColumn.bind(this);
    const boardView = [];

    for (let i = 0; i < 6; i++) {
      let row = [];
      for (let j = 0; j < 7; j++) {
        row.push(
          <div className="col">
            <Circle row={i} column={j} value={this.state.board[i][j]} key={`row-${i} col-${j}`} handlePushColumn={pushToColumn} />
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