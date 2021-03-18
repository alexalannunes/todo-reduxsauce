import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  addTodo: ["text"],
  toggleTodo: ["id"],
  removeTodo: ["id"],
});

const INITIAL_STATE = [
  {
    id: 1,
    completed: false,
    text: "make coffee",
  },
];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  {
    ...action,
    id: (Math.random() * 10000) | 0,
    completed: false,
  },
];

const toggle = (state = INITIAL_STATE, action) =>
  state.map((i) => {
    return i.id === action.id ? { ...i, completed: !i.completed } : i;
  });

const remove = (state = INITIAL_STATE, action) => state.filter((i) => i.id !== action.id);

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove,
});
