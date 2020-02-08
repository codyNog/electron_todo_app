import { useState, useCallback } from "react";
import { createContainer } from "unstated-next";
import {
  readTodosTable,
  createTodoData,
  deleteTodoData
} from "../../../lib/db";
import Todo from "../../../types/todo";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = async (todo: Todo) => {
    await createTodoData(todo);
    setTodos(todos.concat(todo));
  };

  const readTodos = useCallback(async () => {
    const array = await readTodosTable();
    setTodos(array);
  }, []);

  const deleteTodo = async (index: number) => {
    await deleteTodoData(index);
    const nextState = todos.slice();
    nextState.splice(index, 1);
    setTodos(nextState);
  };

  return { todos, setTodos, readTodos, addTodo, deleteTodo };
};

const TodoStore = createContainer(useTodo);

export default TodoStore;
export { useTodo };
