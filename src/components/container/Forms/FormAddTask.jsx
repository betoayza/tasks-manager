import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(8, "Name too short")
    .max(20, "Name too long")
    .required("Name is required"),
  description: yup
    .string()
    .min(5, "Description too short")
    .max(50, "Descrition too long")
    .required("Description required"),
  priority: yup
    .string()
    //.matches(/(low|medium|high)/)
    .oneOf(["low", "medium", "high"], `Only "low", "medium" or "high" accepted`)
    .required(`Priority  required`),
});

let arrColors = [
  "#ffa07a",
  "#ff6347",
  "#d0ff14",
  "#ffcff1",
  "#7df9ff",
  "#ffd700",
];

const randomColor = () => {
  let colorChosen = arrColors[Math.floor(Math.random() * 6)];
  return colorChosen;
};

export const FormAddTask = ({ setModal, tasks, setTasks }) => {
  return (
    <div>
      <h1>Add Task:</h1>
      <Formik
        initialValues={{
          id: Date.now(),
          name: "",
          description: "",
          isCompleted: false,
          priority: "",
          color: randomColor()
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert("Task added!: \n" + JSON.stringify(values, null, 2));
          setTasks([...tasks, values]);
          setModal(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              className={"form-control m-2"}
              placeholder={"Name..."}
              name="name"
              type="text"
            />

            {errors.name && touched.name ? (
              <div style={{ color: "red" }}>{errors.name}</div>
            ) : null}

            <ErrorMessage name="name" />

            <Field
              className={"form-control m-2"}
              placeholder={"Description..."}
              name="description"
              type="text"
            />

            {errors.description && touched.description ? (
              <div style={{ color: "red" }}>{errors.description}</div>
            ) : null}

            <ErrorMessage name="description" />

            <Field
              className={"form-control m-2"}
              placeholder={"Priority..."}
              name="priority"
              type="text"
            />

            {errors.priority && touched.priority ? (
              <div style={{ color: "red" }}>{errors.priority}</div>
            ) : null}

            <ErrorMessage name="priority" />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button type="submit" className={"btn btn-success"}>
                Add
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setModal(false)}
              >
                Close
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
