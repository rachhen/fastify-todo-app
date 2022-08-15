import { Static, Type } from '@sinclair/typebox';

const todo = Type.Object({
  _id: Type.String(),
  title: Type.String(),
  shortId: Type.String(),
  complete: Type.Boolean(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

export const createTodoScheam = {
  tags: ['todo'],
  description: 'Create a todo resoures',
  body: Type.Object({
    title: Type.String({
      default: 'A default title',
    }),
  }),
  response: {
    201: todo,
  },
};

export type CreateTodoBody = Static<typeof createTodoScheam.body>;
