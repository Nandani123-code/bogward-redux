import "./App.css";
import Counter from "./Components/Counter/Counter";
import Todo from "./Components/Todo/Todo";

function App() {
  const name = "JOasdasdHN";

  // switch (name) {
  //   case "SHRYASH":
  //     console.log("print");
  //     break;
  //   case "JOHN":
  //     console.log("PRINTING JOHN");
  //     break;
  //   default:
  //     console.log("NOTHING");
  // }

  const obj = {
    name1: "RAM",
    name2: "SHAM",
    name3: "baburao",
  };

  const newObj = { ...obj, name3: "JOHN" };

  const arr = ["mini", "miki"];

  const arr2 = [...arr, "shreyash", "john"];
  // console.log(arr2);

  // console.log(newObj);

  const list = ["shreyash", "nandani", "vijaya", "vaishanvi", "dipika"];

  console.log(list);

  const newList = list.filter((item) => { 
    return item !== "vijaya";
  });

  console.log(newList);

  return (
    <div>
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}

export default App;

// context vs redux
// 1. Redux has middlewares.
// 2. Rediux development tool
