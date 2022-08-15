import fastify from 'fastify';
import swagger from '@fastify/swagger';
import { todoRoute } from '../modules/todo/todo.route';
import { version } from '../../package.json';

export async function createServer() {
  const app = fastify();

  app.register(swagger, {
    routePrefix: '/docs',
    swagger: {
      tags: [
        {
          name: 'todo',
        },
      ],
      info: {
        title: 'Todo API',
        description: 'Todo API',
        version,
      },
    },
    staticCSP: true,
    exposeRoute: true,
  });

  app.register(todoRoute, { prefix: '/api/todos' });

  return app;
}
