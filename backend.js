const http = require('http');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://a.x.com');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // set
    if(req.url.includes('set')){
        res.setHeader('Set-Cookie', `test=${Date.now()}; HttpOnly;`);
        res.end('ok');
    }
    // get
    if(req.url.includes('get')){
        res.end(req.headers.cookie);
    }
}).listen(3333);