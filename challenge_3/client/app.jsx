// all components here no webpack
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-center mb-4">XYZ E-Store</h1>
        <div className="container">
          <div className="row">
            <div className="col">
              <F1 />
            </div>
          </div>
        </div>
      </div>);
  }
}

class F1 extends React.Component {
  render() {
    return (
      <form action="/">
        <h3>Create Account</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" />
        </div>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
