import React, { useReducer, useState } from "react";

export const todo = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Walk Dog",
    completed: false,
    id: 3892987590
  },
  {
    item: "Cook Dinner",
    completed: false,
    id: 3892987591
  }
];

export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() }
      ];
    case "TOGGLE_COMPLETED":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};
