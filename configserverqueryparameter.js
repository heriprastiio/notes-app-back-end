const configRoutes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const { name, location } = request.query;
      return `Hello, ${name} from ${location}`;
    },
  },
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      request.end('Hello World');
    },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'spongebob' } = request.params;
      const { lang } = request.query;
      if (lang === 'id') {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
    },
  },
];

module.exports = configRoutes;
