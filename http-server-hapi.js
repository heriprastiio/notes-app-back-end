const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
  server.route([{
    method: 'GET',
    path: '/',
    handler: () => {
      return 'Halo Dunia';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: () => {
      return 'About Page';
    },
  },
  {
    method: 'POST',
    path: '/',
    handler: () => {
      return 'Tes';
    },
  }]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
