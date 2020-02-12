import React, { Component } from "react";
import DisplayHello from "./DisplayHello";
import DisplayQuestion from "./DisplayQuestion";

class App extends Component {
  state = {
    username: "Rodney Pictures"
  };

  render() {
    return (
      <div>
        <DisplayHello username={this.state.username} />
        <DisplayQuestion username={this.state.username} />
      </div>
    );
  }
}

export default App;
