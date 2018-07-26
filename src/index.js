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
    console.log("this is:", this);
  }

  deleteRow(id, e) {
    alert(id);
  }

  updateRow(id, e) {
    alert(id);
  }

  render() {
    return (
      <div>
        <h3>{this.props.action}</h3>
        <input
          type="submit"
          value={this.props.name}
          onClick={this.handleClick}
        />{" "}
        <button onClick={e => this.deleteRow("54616526", e)}>Delete Row</button>{" "}
        <button onClick={this.updateRow.bind(this, "gdgdfgfdgfdg")}>
          Update Row
        </button>
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

class UserList extends React.Component {
  users = ["Thomas", "Jonson", "Alice"];
  listItem = this.users.map(user => <li>{user}</li>);
  render() {
    return (
      <div>
        <h3>User List</h3>
        <ul>{this.listItem}</ul>
      </div>
    );
  }
}

class Welcome extends React.Component {
  checkLogin() {
    var isLogin = this.props.isLogin;
    if (isLogin) {
      return <a href="#">LogOut</a>;
    }
    return <a href="#">LogIn</a>;
  }
  render() {
    return (
      <div>
        {this.checkLogin()}
        <h1> Hello {this.props.name} </h1>
        <Login description="Login User" />
        <UserList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome name="React" isLogin={false} />, rootElement);
