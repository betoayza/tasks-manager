import React, { useState } from "react";
import { FormAddTask } from "../../components/container/Forms/FormAddTask";
import { Modal } from "../../components/pure/Modal";
import { Task } from "../../components/pure/Task";
import { initialTasks } from "../../models/db";

// const newTask = {
//  id: Date.now(),
//   name: "",
//   description: "",
// isCompleted: false,
//   priority: "",
// };

export const Home = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modal, setModal] = useState(false);

  const handleAddTask = () => {
    setModal(true);
  };

  return modal ? (
    <Modal>
      <FormAddTask setModal={setModal} tasks={tasks} setTasks={setTasks} />
    </Modal>
  ) : (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleAddTask}>
        Add
      </button>
      <div
        className={"row row-cols-auto border vw-100"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {tasks.length ? (
          tasks.map((task, index) => {
            return (
              <Task key={index} task={task} tasks={tasks} setTasks={setTasks} />
            );
          })
        ) : (
          <div>
            <h2>No tasks :(</h2>
          </div>
        )}
      </div>
    </div>
  );
};
