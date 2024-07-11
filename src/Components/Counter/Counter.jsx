import { useDispatch, useSelector } from "react-redux";
import { changeName, decrement, increment } from "../../app/store";

function Counter() {
  const num = useSelector((state) => state.count);
  const myName = useSelector((state) => state.name);

  const dispatch = useDispatch();

  function myFunc() {
    dispatch(increment());
  }

  return (
    <div>
      <h2>{myName}</h2>
      <button onClick={() => dispatch(changeName())}>Change name</button>
      <h2>{num}</h2>
      <button onClick={myFunc}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
    </div>
  );
}

export default Counter;
