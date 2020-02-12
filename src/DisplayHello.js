import React, { Component } from "react";

class DisplayHello extends Component {
  render() {
    return <p>Hello from DisplayHello {this.props.username}.</p>;
  }
}

export default DisplayHello;
