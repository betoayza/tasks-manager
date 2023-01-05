import { Home } from "./pages/home/Home";

const divStyle = {
  display: "grid",
  placeContent: "center",
  minHeight: "100vh",
  width: "100vw",
};

function App() {
  return (
    <div className="App border text-center" style={divStyle}>
      <h1>Task Manager 2023</h1>
      <Home />
    </div>
  );
}

export default App;
