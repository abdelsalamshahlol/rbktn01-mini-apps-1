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
          [0, 0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0, 0]
          [0, 0, 0, 0, 0, 0, 0]
        ]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Circle />
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)