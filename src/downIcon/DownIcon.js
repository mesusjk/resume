import React, {Component} from "react";
import data from "../data.json";
import "./DownIcon.css";

class DownIcon extends Component {
  render () {
      return (
          <div onClick={this.props.onClick}>
            <div className="scroll-down">
      <img src={data.sections[0].icons.source} />
            </div>
          </div>
      )
  }
}

export default DownIcon;