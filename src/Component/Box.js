import React, { Component } from "react";

export default class Box extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      todo: "",
      time: "",
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

  TakeInputTime = (event) => {
    this.setState({
      time: event.target.value,
    });
  };

  TakeInputDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };

  Log = () => {
    let { todo, time, date, index } = this.state;

    if (todo.trim() === "") {
      return;
    }

    if (date !== "") {
      const [year, month, day] = date.split("-");
      var reverseDate = `${day}-${month}-${year}`;
    }

    // console.log(typeof date);

    const newTodoItem = {
      todo,
      time,
      date: reverseDate,
      index: this.state.index,
    };

    this.setState((prevState) => ({
      index: prevState.index + 1,
      todotext: [...prevState.todotext, newTodoItem],
      todo: "",
      time: "",
      date: "",
    }));
  };

  Delete = (indexToDelete) => {
    this.setState((prevState) => ({
      todotext: prevState.todotext.filter(
        (item) => item.index !== indexToDelete
      ),
    }));
  };

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
                id="appt-time"
                type="time"
                name="appt-time"
                value={this.state.time}
                onChange={this.TakeInputTime}
              />
            </div>
            <div className="col">
              {" "}
              <input
                type="date"
                onChange={this.TakeInputDate}
                className="js-date-box css-date-box"
                value={this.state.date}
                date-date-format="dd-mm-yyyy"
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

        <div style={{ display: "flex", flexDirection: "column" }}>
          {this.state.todotext.map((todo, index) => (
            <div key={index} className="grid">
              <div className="col1">{todo.todo}</div>
              <div className="col1">{todo.time}</div>
              <div className="col1">{todo.date}</div>
              <div className="col1">
                <button
                  className="btn btn-danger"
                  onClick={() => this.Delete(todo.index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
