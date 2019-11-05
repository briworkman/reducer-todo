import React, { useReducer, useState } from "react";

export const todos = [
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
    default:
      return state;
  }
};
