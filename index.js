const ProxyChain = require('proxy-chain')
const port = 80;
const server = new ProxyChain.Server({port})

server.listen(() => {
  console.info(`�Proxy listening on port $port}`)
})
