const EventEmitter = require('events');
const { Http2ServerRequest } = require('http2');

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('New Sale Done');
});

myEmitter.on('newSale', () => {
    console.log("Costumer(s) Name: Praabindh");
});

myEmitter.on('newSale', stock => {
    console.log(`There Are Now ${stock}`);
});

myEmitter.emit('newSale', 9);

//////////

// Server Side

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Another Request Started');
    console.log(req.url);
});

server.on('request', (req, res) => {
    console.log('Request Started');
});

server.on('close', () => {
    console.log('Server Closed');
})

server.listen(8000, () => {
    console.log('Waiting For Requests');
});