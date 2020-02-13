import React, { Component } from "react";
import DisplayHello from "./DisplayHello";
import DisplayQuestion from "./DisplayQuestion";

// NON HOC VERSION
// class App extends Component {
//   state = {
//     username: "Rodney Pictures"
//   };

//   render() {
//     return (
//       <div>
//         <DisplayHello username={this.state.username} />
//         <DisplayQuestion username={this.state.username} />
//       </div>
//     );
//   }
// }

// HOC VERSION -- notice there is no need to pass in the user name as all of the data is in the wrapper.
class App extends Component {
  render() {
    return (
      <div>
        <h2>HOC Rules!</h2>
        <DisplayHello />
        <DisplayQuestion />
      </div>
    );
  }
}

export default App;
