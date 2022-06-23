import React, { Component } from "react";
import "./App.css";

class Child extends Component {
  constructor() {
    super();

    this.state = {
      name: "John",
    };
    console.log("child construct");
  }

  UNSAFE_componentWillMount() {
    console.log("Child willmount");
  }

  UNSAFE_componentDidMount() {
    console.log("Child didmount");
  }

  render() {
    console.log("render");

    return <div className="App"></div>;
  }
}

export default Child;
