import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { createTodoHandler } from './todo.controller';
import { createTodoScheam } from './todo.schema';

export function todoRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post('/', { schema: createTodoScheam }, createTodoHandler);

  done();
}
