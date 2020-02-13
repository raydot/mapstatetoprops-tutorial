import React, { Component } from "react";

/*
/// Usual way:
class DisplayHello extends Component {
  render() {
    return <p>Hello from DisplayHello, {this.props.username}.</p>;
  }
}

export default DisplayHello;
*/

// HOC way
import ourFirstStore from "./ourFirstStore";
class DisplayHello extends Component {
  render() {
    return <p>Hello from DisplayHello {this.props.username}.</p>;
  }
}

export default ourFirstStore(DisplayHello);
