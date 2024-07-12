// state, actions , reducers

import { createStore } from "redux";

// state - object
const initialState = {
  count: 0,
  name: "SHREYASH",
  arr: ["Depika", "Vijaya"],
};

//actions - function
export function increment() {
  return { type: "INCREMENT" };
}

export const decrement = () => ({ type: "DECREMENT" });

export const changeName = () => ({ type: "CHANGENAMEF" });

export const addToList = (paylaod) => ({ type: "ADDTOLIST", paylaod });

export const removeFromList = (paylaod) => ({
  type: "REMOVEFROMLIST",
  paylaod,
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

    default:
      return state;
  }
}

export const store = createStore(myReducer);
