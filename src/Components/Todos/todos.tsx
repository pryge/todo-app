import type { Todo } from "../../types/types"
import TodoItem from "../TodoItem/todoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function Todos ({todos, onToggle, onDelete}: Props) {
  return(
    <ul className="todos">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete}/>
      ))}
    </ul>
  )
}

export default Todos;
