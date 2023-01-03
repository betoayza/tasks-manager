import React from "react";

export const Task = ({ task }) => {
  return (
    <div>
      <p>{task.name}</p>
      <p>{task.description}</p>
      <p>{task.priority}</p>
    </div>
  );
};
