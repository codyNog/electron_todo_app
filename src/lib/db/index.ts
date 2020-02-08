import Dexie from "dexie";
import Todo from "../../types/todo";

const db = new Dexie("MyDatabase");

db.version(1).stores({
  todos: "++id, title, detail limit"
});

db.open();

interface TodoData extends Todo {
  id: number;
}

const todosTable = () => {
  return db.table("todos");
};

const readTodosTable = async (): Promise<TodoData[]> => {
  return await todosTable().toArray();
};

const createTodoData = async (data: Todo) => {
  await todosTable().add(data);
};

const deleteTodoData = async (index: number) => {
  const array = await readTodosTable();
  const targetId = array[index].id;
  todosTable().delete(targetId);
};

export { readTodosTable, createTodoData, deleteTodoData };
