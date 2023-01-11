import { useState } from "react";

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

const chosenColor = randomColor();

export const useGetRandomColor = () => {
  const [randomColor, setRandomColor] = useState(chosenColor);

  return randomColor;
};
