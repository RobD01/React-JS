import React, { Component } from "react";
import "./App.css";
import Child from "./child";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "John",
    };
    console.log("construct");
  }

  UNSAFE_componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({ innerWidth: window.innerWidth });
    }
  }

  UNSAFE_componentDidMount() {
    console.log("didmount");
  }

  componentDidUpdate() {
    console.log("Did Update");
  }

  changeState() {
    this.setState({ name: "Jill" });
  }

  render() {
    return (
      <div className="App">
        Name: {this.state.name}
        <br></br>
        Inner Width: {this.state.innerWidth}
        <Child name={this.state.name} />
        <button onClick={this.changeState.bind(this)}>Change State</button>
      </div>
    );
  }
}

export default App;
