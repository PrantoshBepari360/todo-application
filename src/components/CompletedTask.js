import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import tickImage from "../assets/images/double-tick.png";
import Complete from "./Complete";

export default function CompletedTask() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const { colors } = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      <div className="mb-4 flex space-x-1">
        <img className="w-4 h-4" src={tickImage} alt="Complete" />
        <p className="text-xs text-gray-500">Completed Tasks</p>
      </div>
      <hr className="mb-2" />
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map(
          (todo) => todo.completed && <Complete todo={todo} key={todo.id} />
        )}
    </div>
  );
}
