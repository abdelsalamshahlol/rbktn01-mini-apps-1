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
              <F2 />
              <F3 />
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

class F2 extends React.Component {
  render() {
    return (
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
    )
  }
}

class F3 extends React.Component {
  render() {
    return (
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
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
