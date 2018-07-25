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

class Form extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.action}</h3>
        <input type="submit" value={this.props.name} />
      </div>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.description}</h1>
        <Form action="Authentication" name="Check User" />
        <Form action="View Profile" name="View User" />
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
