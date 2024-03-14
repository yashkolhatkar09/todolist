import React, { Component } from "react";

export default class Box extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      date: "",
      todotext: [],
    };
  }

  TakeInputTodo = (event) => {
    this.setState({
      todo: event.target.value,
    });

    // console.log(event);
  };

  TakeInputDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  Log = () => {
    // Create JSX element for the new todo item
    const newTodoText = (
      <div className="grid">
        <div className="col1">{this.state.todo}</div>
        <div className="col1">{this.state.date}</div>
        <div className="col1">
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
    // Add JSX element to the todotext array
    this.setState((prevState) => ({
      todotext: [...prevState.todotext, newTodoText],
      todo: "",
      date: "",
    }));

    // this.empty();
  };

  // empty = () => {
  //   console.log("empty");
  // };

  render() {
    return (
      <div>
        <div className="m-lg-1 md-5 text-center mt-5 upperbox">
          <div className="row row-cols-auto">
            <div className="col">
              <input
                type="text"
                className="js-enter css-inp"
                placeholder="Todo name"
                onChange={this.TakeInputTodo}
                value={this.state.todo}
              />
            </div>
            <div className="col">
              {" "}
              <input
                type="date"
                onChange={this.TakeInputDate}
                className="js-date-box css-date-box"
                value={this.state.date}
              />
            </div>
            <div className="col">
              <button
                type="button"
                onClick={this.Log}
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* <div className="grid">
          <div className="col1"> {this.state.todo}</div>
          <div className="col1">{this.state.date}</div>
          <div className="col1">
            <button className="btn btn-danger"> Delete </button>
          </div>
        </div> */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {this.state.todotext.map((todo, index) => (
            <div key={index} className="grid">
              {todo}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
