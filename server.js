//Siempre será node ./el inicio. Se puede llamar también index.js

import http from 'node:http'


import { obj } from './data.js'

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'})
  res.end(
    `<!DOCTYPE html>
    <html lang="es"
    <head>
      <meta charset="UTF-8">
      <title>${obj.title}</title>  
    </head>
    <body>
      <h1>${obj.title}</h1>
      <h2>${obj.subtitle}</h2>
      <p>${obj.description}</p>
    </body>
    </html>
    `)
})

server.listen(0, () => {
  console.log(`server listen on port http://localhost:${server.address().port}`)
})