import { update } from "../actions";

const updateTodo = (updateId, updateText) => {
  console.log(updateId, updateText);
  return async (dispatch) => {
    const response = await fetch(
      `https://serene-bastion-12500.herokuapp.com/todos/${updateId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          text: updateText,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(update(todo.id, todo.text));
  };
};

export default updateTodo;
