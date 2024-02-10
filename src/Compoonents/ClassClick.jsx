import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("click the button");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} className="btn">
          click me
        </button>
      </div>
    );
  }
}

export default ClassClick;
