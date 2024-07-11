import "./App.css";
import Counter from "./Components/Counter/Counter";

function App() {
  const name = "JOasdasdHN";

  switch (name) {
    case "SHRYASH":
      console.log("print");
      break;
    case "JOHN":
      console.log("PRINTING JOHN");
      break;
    default:
      console.log("NOTHING");
  }

  const obj = {
    name1: "RAM",
    name2: "SHAM",
    name3: "baburao",
  };

  const newObj = { ...obj, name3: "JOHN" };

  console.log(newObj);

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

// context vs redux
// 1. Redux has middlewares.
// 2. Rediux development tool
