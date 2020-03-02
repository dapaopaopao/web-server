const http = require('http')
const mysql = require('mysql')
const serverHandle = require('../../index')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '15215819755',
  database: 'myblog'
})

const server = http.createServer(serverHandle)

server.listen('3001', () => {
  console.log('监听成功')
})