const jsonserver = require('json-server')
const server = jsonserver.create()
const router = jsonserver.router('./data/bdsessions.json') //tenemos la info
const middlewares = jsonserver.defaults() //puente para conectar app por separado en medinte 2 app
server.use(middlewares)
server.use(router)
const port = process.env.PORT || 4000 //puerto donde va a estar
server.listen(port, () => {      //cuando este escuchando muestr en consola
    console.log('Json Server is running');
})
