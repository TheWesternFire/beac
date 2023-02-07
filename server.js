const http = require('http')
const fs = require('fs')

function listener(req, res) {
    res.writeHead(200)
    res.write(handle_path(req.url))
    res.end()
}

var server = http.createServer(listener)
server.listen(8080)

function handle_path(path) {
    res=path

    //console.log(path)
    //console.log(spath)

    spath=path.split('/')

    switch (spath[1]) {
        case '':
        case 'index':
            res = fs.readFileSync('index.html')
            break
        case 'chat':
            res = handle_chat(spath[2])
            break

        default:
            res = 'Page not found!'
            break
    }

    return res
}

function handle_chat(name) {
    let res = fs.readFileSync('chat.html')
    res = res.toString().replace('{{name}}', name)
    return res

    }


