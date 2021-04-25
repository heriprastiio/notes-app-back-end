<<<<<<< HEAD
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

=======
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
>>>>>>> cb0b9e0f359a15727ff1f380eb932b3dd0d55ae6
];
module.exports = routes;
