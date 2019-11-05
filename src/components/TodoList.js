import React, { useReducer } from "react";
import { appReducer, todo } from "../reducers/reducer";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

export const TodoList = props => {
  const [state, dispatch] = useReducer(appReducer, todo);
  console.log(state);

  return (
    <>
      <TodoForm dispatch={dispatch} />
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
};
