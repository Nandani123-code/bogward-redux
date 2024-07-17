// state, actions , reducers
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "./sagas";

// state - object
const initialState = {
  count: 0,
  name: "SHREYASH",
  arr: ["Depika", "Vijaya"],
  sagaCounter: 0,
  myArr: [],
  nandaniArr: [],
};

//actions - function
export function increment() {
  return { type: "INCREMENT" };
}

const sagaMiddleware = createSagaMiddleware();

export const newFetchData=()=>({type:"NEWFETCHDATA"})
export const decrement = () => ({ type: "DECREMENT" });

export const changeName = () => ({ type: "CHANGENAMEF" });

export const addToList = (paylaod) => ({ type: "ADDTOLIST", paylaod });

export const removeFromList = (paylaod) => ({
  type: "REMOVEFROMLIST",
  paylaod,
});

export const incrementSaga = () => ({
  type: "INCREMENT_ASYNC",
});

export const fetchData = () => ({
  type: "FETCHDATA",
});
// Reducer - function, this has 2 paramater
function myReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "CHANGENAMEF":
      return {
        ...state,
        name: "DIPIKA",
      };

      case "NEW_FETCHED_DATA":
        console.log(action)
        return{
          ...state,
          nandaniArr:action.payload
        }

    case "ADDTOLIST":
      return {
        ...state,
        arr: [...state.arr, action.paylaod],
      };

    case "REMOVEFROMLIST":
      return {
        ...state,
        arr: state.arr.filter((item) => {
          return item !== action.paylaod;
        }),
      };

    case "INCREMENTSAGA":
      return {
        ...state,
        sagaCounter: state.sagaCounter + 1,
      };

    case "FETCHED_DATA":
      return {
        ...state,
        myArr: action.payload,
      };

    default:
      return state;
  }
}

export const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
