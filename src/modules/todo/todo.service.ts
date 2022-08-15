import { nanoid } from 'nanoid';
import { Todo, TodoModel } from './todo.model';
import { CreateTodoBody } from './todo.schema';

export async function createTodo(input: CreateTodoBody): Promise<Todo> {
  const shortId = `todo_${nanoid()}`;

  return TodoModel.create({
    ...input,
    shortId,
  });
}
