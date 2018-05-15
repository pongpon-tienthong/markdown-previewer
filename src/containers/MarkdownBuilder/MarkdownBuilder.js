import React, { Component } from "react";
import Textarea from "../../components/Textarea/Textarea";
import Previewer from "../../components/Previewer/Previewer";
import "./MarkdownBuilder.css";

class MarkdownBuilder extends Component {
  render() {
    return (
      <div className="MarkdownBuilder">
        <Textarea />
        <Previewer />
      </div>
    );
  }
}

export default MarkdownBuilder;
