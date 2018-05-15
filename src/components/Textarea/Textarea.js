import React from "react";
import "./Textarea.css";

const textarea = props => (
  <textarea className="Textarea" onChange={event => props.changed(event)}>
    {props.children}
  </textarea>
);

export default textarea;
