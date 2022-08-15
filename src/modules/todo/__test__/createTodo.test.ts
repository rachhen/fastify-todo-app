import { describe, it, vi, expect } from 'vitest';
import { createServer } from '../../../utils/createServer';
import * as TodoService from '../todo.service';

describe('POST "/api/todos"', () => {
  it('should call the createTodo service', async () => {
    const createTodoSpy = vi.spyOn(TodoService, 'createTodo');
    const todo = {
      _id: '123',
      title: 'A title',
      shortId: 'todo_123',
      complete: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    expect(createTodoSpy.getMockName()).toEqual('createTodo');

    createTodoSpy.mockResolvedValue(todo);

    const server = await createServer();

    await server.ready();

    const payload = {
      title: 'Test todo',
    };

    const response = await server.inject({
      method: 'POST',
      url: '/api/todos',
      payload,
    });

    expect(response.json()).toEqual(todo);

    expect(createTodoSpy).toHaveBeenCalledWith(payload);
  });
});
