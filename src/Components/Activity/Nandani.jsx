import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newFetchData } from "../../app/store";

function Nandani() {
  const nandaniArr = useSelector((state) => state.nandaniArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newFetchData());

    console.log(nandaniArr);
  }, []);

  return (
    <div>
      <div>
        <div>
          {nandaniArr.map((elem) => (
            <p key={elem._id}>{elem.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nandani;
