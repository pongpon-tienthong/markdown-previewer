import React, { Component } from "react";
import Textarea from "../../components/Textarea/Textarea";
import Previewer from "../../components/Previewer/Previewer";
import "./MarkdownBuilder.css";
import marked from "marked";
import initialText from "./InitialText";

class MarkdownBuilder extends Component {
  state = {
    text: initialText,
    markedDownText: marked(initialText)
  };

  textChangedHandler = event => {
    const text = event.target.value;

    if (text) {
      this.setState({
        text: text,
        markedDownText: marked(text)
      });
    }
  };

  render() {
    return (
      <div className="MarkdownBuilder">
        <Textarea changed={this.textChangedHandler}>{this.state.text}</Textarea>
        <Previewer markedDownText={this.state.markedDownText} />
      </div>
    );
  }
}

export default MarkdownBuilder;
