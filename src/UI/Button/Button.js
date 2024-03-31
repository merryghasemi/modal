import React from "react";

import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={`btn ${this.props.btnType}`}
        onClick={this.props.click}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
