const arrColors = [
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

export const initialTasks = [
  {
    id: 1,
    name: "Do homework",
    description: "to English",
    isCompleted: false,
    priority: "low",
    color: `${randomColor()}`,
  },
  {
    id: 2,
    name: "Walk the dogs",
    description: "in the park",
    isCompleted: false,
    priority: "high",
    color: `${randomColor()}`,
  },
  {
    id: 3,
    name: "Clean closet",
    description: "completly",
    isCompleted: false,
    priority: "medium",
    color: `${randomColor()}`,
  },
];
