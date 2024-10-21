console.log(`Halo, Kita Akan Belajar Membuat Server`);
console.log(`Ayu disiniii, Welcome To The Ayu Chanel`);

const http = require('http');
const requestListener = (request, Response) => {
    Response.setHeader('Content-Type', 'text/html');

    Response.statusCode = 200;
    const { method } = request;

    if (method === 'GET'){
        Response.end('<h1>Halo!</h1>');
    }

    if(method === 'POST'){
        Response.end('<h1>nihaoo!</h2>');
    }

    if(method === 'PUT'){
        Response.end('<h1>Koniciwa!</h1>');
    }

    if(method === 'DELETE'){
        Response.end('<h1>Anyonghaseyo!</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`); 
});