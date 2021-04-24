const routes = [{
  method: 'GET',
  path: '/',
  handler: () => {
    return 'Home Page';
  },
},
{
  method: 'GET',
  path: '/latihan',
  handler: () => {
    return 'Latihan';
  },
},
{
  method: '*',
  path: '/{any*}',
  handler: () =>{
    return 'Tidak dapat ditemukan';
  },
},
];
module.exports = routes;
