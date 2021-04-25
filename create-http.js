// Konfigurasi server
const http = require('http');

const requestListener = (request, response) => {
  const { url } = request;
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;
  const { method } = request;
  if (url === '/') {
    if (method === 'GET') {
      response.end('<h1>Halaman /</h1>');
    }
  } else if (url === '/about') {
    let body = [];
    request.on('data', (chunck) => {
      body.push(chunck);
    });
    request.on('end', () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h2>Hai, ${name}!</h2>`);
    });
  } else if (url === '/halo') {
    if (method === 'POST') {
      response.end('<h1>POST HALO</h1>');
    }
  } else {
    response.end('<h1>Default</h1>');
  }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
