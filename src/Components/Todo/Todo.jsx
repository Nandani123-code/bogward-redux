import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../../app/store";

// 1. capture the name in the input.
// 2. set the name which we type.
// 3. Print the name on clicking of button.
// 4. Dispatch the name to the action in redux.

function Todo() {
  const list = useSelector((state) => state.arr);
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  function handelAdd() {
    if (name === "") {
      alert("enter name");
      return;
    }

    dispatch(addToList(name));
    setName("");
  }

  function handleRemove(name) {
    dispatch(removeFromList(name));
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Names APP</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={handelAdd}>ADD</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        {list.map((elem, i) => (
          <div
            key={i} 
            style={{
              border: "1px solid",
              width: "50%",
              margin: "auto",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <p>{elem}</p>
            <button onClick={() => handleRemove(elem)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
