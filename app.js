const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    const urlPath = req.url === '/' ? 'index.html' : req.url
    fs.readFile((__dirname, `static/${urlPath}`), function (err, data) {
        if (err) {
            res.end('404: File Not Found !')
            return res.end();
        }
        else {
            console.log(req.url)
            console.log(urlPath)
            res.end(data.toString());
        }
    })
}).listen(8080);

