import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            whaterver here
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