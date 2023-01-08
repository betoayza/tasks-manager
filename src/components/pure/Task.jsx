import React from "react";

const taskStyle = {
  height: "200px",
  width: "150px",
};

const lowPrioriryStyle = <span className="badge text-bg-info">low</span>;
const mediumPrioriryStyle = (
  <span className="badge text-bg-warning">medium</span>
);
const highPrioriryStyle = <span className="badge text-bg-danger">high</span>;

export const Task = ({ task, tasks, setTasks }) => {
  return (
    <div className={"form-control m-2"} style={taskStyle}>
      <h5>{task.name}</h5>
      <p>{task.description}</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={() => {
            task.isCompleted = !task.isCompleted;
            console.log(task);
            setTasks(
              tasks.map((tsk) => {
                tsk.id === task.id && (tsk.isCompleted = task.isCompleted);
                return tsk;
              })
            );
          }}
          checked={task.isCompleted}
        />

        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {task.isCompleted ? "Completed" : "Incompleted"}
        </label>
      </div>
      {task.priority === "low" && lowPrioriryStyle}
      {task.priority === "medium" && mediumPrioriryStyle}
      {task.priority === "high" && highPrioriryStyle}
    </div>
  );
};
