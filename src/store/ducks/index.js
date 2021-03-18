import { combineReducers, createStore } from "redux";
import todoReducer from "./todos";
const reducers = combineReducers({
  todos: todoReducer,
});
export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
