import React from "react";

const buttonsStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "5px",
};

const lowPrioriryStyle = <span className="badge text-bg-info">low</span>;
const mediumPrioriryStyle = (
  <span className="badge text-bg-warning">medium</span>
);
const highPrioriryStyle = <span className="badge text-bg-danger">high</span>;

export const Task = ({
  task,
  tasks,
  setTasks,
  handleDeleteTask,
  handleEditTask,
}) => {
  const taskStyle = {
    height: "auto",
    maxWidth: "160px",
    backgroundColor: `${task.color}`,
  };

  return (
    <div
      className={"form-control border border-dark border-3 m-2 text-break"}
      style={taskStyle}
    >
      <h5
        style={
          task.isCompleted
            ? { textDecoration: "line-through", textDecorationColor: "red" }
            : {}
        }
        className={""}
      >
        {task.name}
      </h5>
      <div className={""}>
        <p
          style={
            task.isCompleted
              ? { textDecoration: "line-through", textDecorationColor: "red" }
              : {}
          }
        >
          {task.description}
        </p>
      </div>
      {task.priority === "low" && lowPrioriryStyle}
      {task.priority === "medium" && mediumPrioriryStyle}
      {task.priority === "high" && highPrioriryStyle}

      <div className="form-check form-switch mt-2 mb-2">
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
        />

        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {task.isCompleted ? (
            <span style={{ color: "green", fontStyle: "italic" }}>
              Completed
            </span>
          ) : (
            <span style={{ color: "gray", fontStyle: "italic" }}>
              Incompleted
            </span>
          )}
        </label>
      </div>

      <div style={buttonsStyle}>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDeleteTask(task.id)}
        >
          <i className="bi-trash2"></i>
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleEditTask(task)}
        >
          <i className="bi-pen"></i>
        </button>
      </div>
    </div>
  );
};
