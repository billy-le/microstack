import http from 'http';

const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Demo Page</title></head>');
  res.write('<body><h1>Hello from NodeJS Demo App</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(PORT, () => {
  console.info('Server is listening on PORT: ', PORT);
});
