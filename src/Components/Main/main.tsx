import { useState } from "react";
import Todos from "../Todos/todos";
import "./main.style.scss";
import type { Todo } from "../../types/types";
import { getFormattedDate } from "../../utils/utils";

function Main() {
  const { full } = getFormattedDate();
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Buy bread", completed: false, createdAt: full },
    { id: 2, title: "Buy onion", completed: false, createdAt: full },
    { id: 3, title: "Buy CD", completed: false, createdAt: full },
    { id: 4, title: "Buy car oil", completed: false, createdAt: full },
  ]);

  function toogleCompleted (id: number) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? {...todo, completed: !todo.completed}
          : todo
      )
    )
  };

  function onDelete (id: number) {
    setTodos((prev) => prev.filter(p => p.id !== id) )
  }

  return (
    <div className="main">
      <div className="main__hello">Hello, Oleh!</div>
      <Todos todos={todos} onToggle={toogleCompleted} onDelete={onDelete}/>
    </div>
  );
}

export default Main;
