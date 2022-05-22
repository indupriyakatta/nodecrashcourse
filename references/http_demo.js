  const http = require('http');

  
  //CREATE SERVER
 http.createServer((req, res) => {
     //write response
     res.write('hello world');
     res.end();
 }).listen(5000, () => console.log('server running..'));