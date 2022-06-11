import apiService from "../../app/apiService";
import { ADD_TODO, GET_TODOS, SET_FILTER, TOGGLE_TODO } from "./reducer";
let nextTodoId = 0;

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = { id: nextTodoId++, text, completed: false };
    const response = await apiService.post("/todos", todo);

    dispatch({ type: ADD_TODO, payload: { id: nextTodoId++, text } });
  } catch (error) {
    console.log(error);
  }
  // return {
  //   type: ADD_TODO,
  //   payload: { id: nextTodoId++, text },
  // };
};

export const getTodos = () => async (dispatch) => {
  try {
    const response = await apiService.get("/todos");
    dispatch({ type: GET_TODOS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
  // return {
  //   type: ADD_TODO,
  //   payload: { id: nextTodoId++, text },
  // };
};

// export const toggleTodo = (id) => {
//   return {
//     type: TOGGLE_TODO,
//     payload: { id },
//   };
// };
export const toggleTodo = (id, completed) => async (dispatch) => {
  try {
    const todo = { completed };
    const res = await apiService.put(`/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });

    dispatch({ type: TOGGLE_TODO, payload: { id, completed } });
  } catch (error) {
    console.log(error);
  }
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
