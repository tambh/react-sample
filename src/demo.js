import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NameForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Demo</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NameForm />, rootElement);
