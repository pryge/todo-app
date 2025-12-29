import { useState } from "react";
import Todos from "../Todos/todos";
import "./main.style.scss";
import type { Todo } from "../../types/types";
import { getFormattedDate } from "../../utils/utils";

type Props = {
  searchQuery: string;
};

function Main({ searchQuery }: Props) {
  const { full } = getFormattedDate();
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Buy bread", completed: false, createdAt: full },
    { id: 2, title: "Buy onion", completed: false, createdAt: full },
    { id: 3, title: "Buy CD", completed: false, createdAt: full },
    { id: 4, title: "Buy phone", completed: false, createdAt: full },
    { id: 5, title: "Order a car", completed: false, createdAt: full },
    { id: 6, title: "Pay bills", completed: false, createdAt: full },
    {
      id: 7,
      title: "Buy subscription on spotify",
      completed: false,
      createdAt: full,
    },
    {
      id: 8,
      title: "Take brother to a barber",
      completed: false,
      createdAt: full,
    },
    { id: 9, title: "Buy car oil", completed: false, createdAt: full },
  ]);

  function toogleCompleted(id: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function onDelete(id: number) {
    setTodos((prev) => prev.filter((p) => p.id !== id));
  }

  const visibleTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main">
      <div className="main__hello">Hello, Oleh!</div>
      <div className="main__text">Your todo`s on today</div>
      {visibleTodos.length === 0 ? (
        <span>There no todos :(</span>
      ) : (
        <Todos
          todos={visibleTodos}
          onToggle={toogleCompleted}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

export default Main;
