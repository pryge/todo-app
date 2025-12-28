import type { Todo } from "../../types/types";
import "./todoItem.style.scss";
import crossIcon from '../../assets/icons/cross-svgrepo-com.svg';

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="todo-item">
      <label className="todo-item__checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="todo-item__checkmark"></span>
      </label>
      <span
        className={
          todo.completed ? "todo-item__title completed" : "todo-item__title"
        }
      >
        {todo.title}
      </span>
      <div className="todo-item__delete" onClick={() => onDelete(todo.id)}>
        <img src={crossIcon}/>
      </div>
    </li>
  );
}

export default TodoItem;
