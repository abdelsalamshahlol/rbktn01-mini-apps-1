// all components here no webpack
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f1: true,
      f2: false,
      f3: false,
      f4: false,
      next: 2,
      prev: 1,
      data: null,
    }
  }

  stepForward(prev, next) {
    if (next <= 4) {
      this.setState({
        ['f' + next]: true,
        ['f' + prev]: false,
        next: this.state.next + 1,
        prev: this.state.prev + 1
      });
    }
    if (next === 4) {
      let formData = new FormData(document.getElementById('order'));
      console.log({ formData })
      this.setState({
        data: formData
      })
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
        <div className="container">
          <div className="row">
            <div className="col">
              <form action="#" id="order" method="POST">
                <F1 isVisible={this.state.f1} />
                <F2 isVisible={this.state.f2} />
                <F3 isVisible={this.state.f3} />
                {this.state.f4 && (<Summary orderData={this.state.data} />)}
              </form>
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
  render(props) {
    return (
      <div className={this.props.isVisible ? 'd-block' : 'd-none'}>
        <h3>Create Account</h3>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" />
        </div>
      </div>
    )
  }
}

class F2 extends React.Component {
  render(props) {
    return (
      <div className={this.props.isVisible ? 'd-block' : 'd-none'}>
        <h3>Shipping Information</h3>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Address line 1</label>
              <input type="text" className="form-control" name="address1" />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Address line 2</label>
              <input type="text" className="form-control" name="address2" />
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
      </div>
    )
  }
}

class F3 extends React.Component {
  render(props) {
    return (
      <div className={this.props.isVisible ? 'd-block' : 'd-none'}>
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
      </div>
    )
  }
}

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* Summary with all details and purchase button */}
        <h1>Order Summary</h1>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{this.props.orderData.get('name')}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{this.props.orderData.get('email')}</td>
            </tr>
            <tr>
              <th>Password:</th>
              <td>{this.props.orderData.get('password').replace(/\w/g, '#')}</td>
            </tr>
            <tr>
              <th>Shippin Address:</th>
              <td>{this.props.orderData.get('address1') + ', ' + this.props.orderData.get('address2')}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{this.props.orderData.get('phone')}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{this.props.orderData.get('city')}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{this.props.orderData.get('state')}</td>
            </tr>
            <tr>
              <th>Zip Code</th>
              <td>{this.props.orderData.get('zip')}</td>
            </tr>
            <tr>
              <th>Credit Card Number</th>
              <td>{this.props.orderData.get('cc_number')}</td>
            </tr>
            <tr>
              <th>Expiry Date</th>
              <td>{this.props.orderData.get('expiry')}</td>
            </tr>
            <tr>
              <th>CVV</th>
              <td>{this.props.orderData.get('cvv')}</td>
            </tr>
            <tr>
              <th>Billing Zip Code</th>
              <td>{this.props.orderData.get('billing_zip')}</td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col">
            <div className="my-5"><button className="btn btn-primary" onClick={() => this.checkOut()}>Purchase </button></div>
          </div>
        </div>
      </div>
    )
  }

  checkOut() {
    event.preventDefault();
    //send data to the backend and show the result of the transaction
    let dataObj = {};
    this.props.orderData.forEach((v, k) => {
      dataObj[k] = v;
    })

    axios.post('/save', { userData: dataObj })
      .then(({ data }) => {
        console.log({ data })
      })
      .catch(e => {
        console.error(e)
      })

  }
}
ReactDOM.render(<App />, document.getElementById('app'));
