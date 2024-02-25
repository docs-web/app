import { createServer } from 'http';
import { readFile } from 'fs';
const port = 3000;

const server = createServer(function (req, res) {
    if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        readFile('login.html', function(error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404);
        res.write('Error: Endpoint Not Found ' + req.url);
        res.end();
    }
});

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});
