import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`https://serene-bastion-12500.herokuapp.com/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
