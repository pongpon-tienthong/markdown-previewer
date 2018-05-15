import React from "react";
import "./Previewer.css";

const previewer = props => (
  <div
    className="Previewer"
    dangerouslySetInnerHTML={{ __html: props.markedDownText }}
  />
);

export default previewer;
