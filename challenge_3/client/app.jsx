// all components here no webpack
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f1: true,
      f2: false,
      f3: false,
      next: 2,
      prev: 1,
    }
  }

  stepForward(prev, next) {
    if (next <= 3) {
      this.setState({
        ['f' + next]: true,
        ['f' + prev]: false,
        next: this.state.next + 1,
        prev: this.state.prev + 1
      });
    }
  }

  stepBackWards(prev, next) {
    if (prev > 0) {
      this.setState({
        ['f' + next]: false,
        ['f' + prev]: true,
        next: this.state.next - 1,
        prev: this.state.prev - 1
      });
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center mb-4">XYZ E-Store</h1>
        <pre>pre  {this.state.prev}</pre>
        <pre>next {this.state.next}</pre>
        <div className="container">
          <div className="row">
            <div className="col">
              {this.state.f1 && (<F1 />)}
              {this.state.f2 && (<F2 />)}
              {this.state.f3 && (<F3 />)}
            </div>
          </div>
          <Nav stepForward={this.stepForward.bind(this)} stepBackwards={this.stepBackWards.bind(this)} next={this.state.next} prev={this.state.prev} />
        </div>
      </div>);
  }
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <button className="btn btn-success" onClick={() => this.props.stepBackwards(this.props.prev, this.props.next)}>Back</button>
        </div>
        <div className="col text-right">
          <button className="btn btn-primary" onClick={() => this.props.stepForward(this.props.prev, this.props.next)}>Next</button>
        </div>
      </div>
    )
  }
}

class F1 extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

class F2 extends React.Component {
  render() {
    return (
      <div>
        <form action="/">
          <h3>Shipping Information</h3>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Address line 1</label>
                <input type="text" className="form-control" name="addres1" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Address line 2</label>
                <input type="text" className="form-control" name="addres1" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" name="phone" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" name="city" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>State</label>
                <input type="text" className="form-control" name="state" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" className="form-control" name="zip" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

class F3 extends React.Component {
  render() {
    return (
      <div>
        <form action="/">
          <h3>Payment Information</h3>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Credit Card Number</label>
                <input type="text" className="form-control" name="cc_number" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="date" className="form-control" name="expiry" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="form-group">
                <label>CVV</label>
                <input type="text" className="form-control" name="cvv" />
              </div>
            </div>
            <div className="col">
              <div className="form-group">
                <label>Billing Zip Code</label>
                <input type="text" className="form-control" name="billing_zip" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
