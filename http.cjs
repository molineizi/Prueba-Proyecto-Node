const http = require('http')

const server = http.createServer((request,response) => {
    console.log('---request---')
    console.log(request)
    console.log('---response---')
    console.log(response)
})

const PORT = 3000

server.listen(PORT, () => console.log('servidor iniciado...')) 