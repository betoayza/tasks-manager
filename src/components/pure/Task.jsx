import React from "react";

const taskStyle = {
  height: "200px",
  width: "100px",
};

const lowPrioriryStyle = <span class="badge text-bg-info">low</span>;
const mediumPrioriryStyle = <span class="badge text-bg-warning">medium</span>;
const highPrioriryStyle = <span class="badge text-bg-danger">high</span>;

export const Task = ({ task }) => {
  return (
    <div className={"form-control m-2"} style={taskStyle}>
      <h5>{task.name}</h5>
      <p>{task.description}</p>

      {task.priority === "low" && lowPrioriryStyle}
      {task.priority === "medium" && mediumPrioriryStyle}
      {task.priority === "high" && highPrioriryStyle}
    </div>
  );
};
