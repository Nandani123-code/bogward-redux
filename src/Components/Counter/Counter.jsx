import { useDispatch, useSelector } from "react-redux";
import {
  changeName,
  decrement,
  fetchData,
  increment,
  incrementSaga,
} from "../../app/store";
import styles from "./Counter.module.css";
import { useEffect } from "react";

function Counter() {
  const num = useSelector((state) => state.count);
  const myName = useSelector((state) => state.name);
  const sagaCounter = useSelector((state) => state.sagaCounter);
  const myArr = useSelector((state) => state.myArr);

  const dispatch = useDispatch();

  function myFunc() {
    dispatch(increment());
  }

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div>
      <h2>{myName}</h2>
      <button onClick={() => dispatch(changeName())}>Change name</button>
      <h2>{num}</h2>
      <button onClick={myFunc}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
      <div>
        <h1>Saga Counter</h1>
        {/* <h2>0</h2> */}
        <h2>{sagaCounter}</h2>
        <button onClick={() => dispatch(incrementSaga())}>increment</button>
      </div>
      <div className={styles.list}>
        {myArr.map((elem) => (
          <p key={elem._id}>{elem.name}</p>
        ))}
      </div>

    </div>
  );
}

export default Counter;
