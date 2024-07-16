import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

// function to call the reducer
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENTSAGA" });
}

// To watch the
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

function* fetchData() {
  try {
    const response = yield call(axios.get, "https://bogward.onrender.com/all");
    console.log(response.data);
    yield put({ type: "FETCHED_DATA", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* watchFetchData() {
  yield takeEvery("FETCHDATA", fetchData);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchFetchData()]);
}
