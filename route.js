const routes = [
  {
    method: '*',
    path: '/',
    handler: () => 'Halaman Tidak Ditemukan Dengan Method Tersebut',
  },
  {
    method: 'GET',
    path: '/about',
    handler: () => 'About Page',
  },
  {
    method: 'GET',
    path: '/',
    handler: () => 'Homepage',
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request) => {
      const { name = 'stranger' } = request.params;
      return `Hello, ${name}`;
    },
  },
];
module.exports = routes;
