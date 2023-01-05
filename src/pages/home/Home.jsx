import React from "react";
import { Task } from "../../components/pure/Task";
import { initialTasks } from "../../models/db";

export const Home = () => {
  return (
    <div
      className={"row row-cols-auto border vw-100"}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {initialTasks.length ? (
        initialTasks.map((task, index) => {
          return <Task key={index} task={task} />;
        })
      ) : (
        <div>
          <h2>No tasks :(</h2>
        </div>
      )}
    </div>
  );
};
