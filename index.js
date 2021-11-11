const http=require ('http');
const app=require('./server/app');
const server=http.createServer(app);

server.listen(5000);
console.log("Server is running on http://localhost:5000");