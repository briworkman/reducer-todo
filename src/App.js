import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Reducer Todo</h1>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
