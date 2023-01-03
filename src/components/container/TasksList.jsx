import React from "react";
import { initialTasks } from "../../models/db";
import { Task } from "../pure/Task";

export const TasksList = () => {
  return (
    <div>
      <h2>TasksList</h2>
      {initialTasks.length ? (
        initialTasks.map((task, index) => {
          return <Task key={index} task={task} />;
        })
      ) : (
        <div>
          <h2>No tasks :/</h2>
        </div>
      )}
    </div>
  );
};
