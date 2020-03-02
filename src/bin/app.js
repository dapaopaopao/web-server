const http = require('http')
const mysql = require('mysql')
const serverHandle = require('../../index')


const server = http.createServer(serverHandle)




server.listen('8000', () => {
  console.log('监听成功')
})