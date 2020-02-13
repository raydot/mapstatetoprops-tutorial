import React, { Component } from "react";

/*// Usual Way
class DisplayQuestion extends Component {
  render() {
    return <div>Hello from DisplayQuestion, {this.props.username} </div>;
  }
}

export default DisplayQuestion;*/

// HOC way
// import ourFirstStore from "./ourFirstStore";

// class DisplayQuestion extends Component {
//   render() {
//     return <div>Hello from DisplayQuestion, {this.props.username}.</div>;
//   }
// }

// export default ourFirstStore(DisplayQuestion);

// MapStateToProps way:
import ourFirstStore from "./ourFirstStore";
import { connect } from "react-redux";
class DisplayQuestion extends Component {
  render() {
    return <div>Hello from mapStateToProps, {this.props.nameAsProps}</div>;
  }
}

function mapStateToProps(state) {
  return {
    nameAsProps: state.username
  };
}

export default connect(mapStateToProps)(DisplayQuestion);
