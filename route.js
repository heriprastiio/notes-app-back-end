const routes = [
  {
    method: '*',
    path: '/',
    handler: () => 'Halaman Tidak Ditemukan Dengan Method Tersebut',
  }, {
    method: 'GET',
    path: '/',
    handler: () => 'Homepage',
  },

];
module.exports = routes;
