import React, { Component } from "react";
import Box from "./Component/Box";
import Navbr from "./Component/Navbar";
export default class App extends Component {
  render() {
    {
    }
    return (
      <div>
        <Navbr />
        <div className="ms-2">
          <h1 className="text-light md-5 ms-2 md-4 mt-4 ">Todo List</h1>

          <Box/>
        </div>
      </div>
    );
  }
}
