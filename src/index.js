import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const divMemo = {
  color: "blue",
  padding: "5px"
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.props.message);
    console.log("this is:", this.props.name);
  }

  render() {
    return (
      <div>
        <h3>{this.props.action}</h3>
        <input
          type="submit"
          value={this.props.name}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { des: 100000 };
  }

  componentDidMount() {
    this.setState({
      des: 50000
    });
  }

  componentWillUnmount() {}

  renderHeader() {
    return (
      <div style={divMemo}>
        <i>test method</i>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1> {this.props.description}</h1>
        <Form
          action="Authentication"
          name="Check User"
          message="Authentication"
        />
        <Form action="View Profile" name="View User" message="View Profile" />
        <this.renderHeader />

        <p>State value : {this.state.des} </p>
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name} </h1>
        <Login description="Login User" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome name="React" />, rootElement);
