// swagger.ts
import fastifySwagger from '@fastify/swagger';
import fastify from 'fastify';

export default {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'Polls API',
      description: 'Poll API documentation',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'More infos here',
    },
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
};

