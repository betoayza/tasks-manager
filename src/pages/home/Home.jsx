import React, { useState } from "react";
import { FormAddTask } from "../../components/container/Forms/FormAddTask";
import { Modal } from "../../components/pure/Modal";
import { Task } from "../../components/pure/Task";
import { initialTasks } from "../../models/db";
import { FormEditTask } from "../../components/container/Forms/FormEditTask";

export const Home = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modal, setModal] = useState(false);
  const [isModal, setIsModal] = useState("");
  const [task, setTask] = useState(null);

  const handleAddTask = () => {
    setModal(true);
    setIsModal("addTask");
  };

  const handleDeleteTask = (taskID) => {
    setTasks(
      tasks.filter((task) => {
        return task.id != taskID;
      })
    );
  };

  const handleEditTask = (task) => {
    setModal(true);
    setIsModal("editTask");
    setTask(task);
  };

  return modal ? (
    <Modal>
      {isModal === "addTask" && (
        <FormAddTask
          setModal={setModal}
          tasks={tasks}
          setTasks={setTasks}
          isModal={isModal}
        />
      )}

      {isModal === "editTask" && (
        <FormEditTask
          task={task}
          setModal={setModal}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </Modal>
  ) : (
    <div className={"border"}>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddTask}        
      >
        <i
          style={{ fontSize: "20px" }}
          className="bi-plus-circle-fill"
        ></i>
      </button>
      <div
        className={"row row-cols-auto border vw-100"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {tasks.length ? (
          tasks.map((tsk, index) => {
            return (
              <Task
                key={index}
                task={tsk}
                tasks={tasks}
                setTasks={setTasks}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
            );
          })
        ) : (
          <div>
            <h2 style={{ color: "#7cfc00" }}>No tasks :(</h2>
          </div>
        )}
      </div>
    </div>
  );
};
