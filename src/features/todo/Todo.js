import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoAdd from "./TodoAdd";
import TodoFilterButtons from "./TodoFilterButtons";
import TodoList from "./TodoList";
import { getTodos } from "./actions";

function Todo() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterButtons />
    </div>
  );
}

export default Todo;
