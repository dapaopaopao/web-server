const express = require('express')
const mysql = require('mysql')
const app = express()
const serverHandle = require('../../index')

// express的中间件，获取req的body部分内容
const bodyParser = require('body-parser')

//解决跨域问题
app.use(require('cors')())

//创建mysql实例
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '15215819755',
  database: 'myblog'
})
//监听3001端口 然后干点事
app.listen(3001, () => {
  console.log('连接成功')
})

// 接受json格式的post传过来的表单
var jsonParser = bodyParser.json()

// 接受post传过来的表单
var urlencodedParser = bodyParser.urlencoded({ extended: false })


serverHandle()


// app.get('/', async (req, res) => {
//   res.send('123')
// })

// app.post('/article/create', urlencodedParser, (req, res) => {

//   const bodyData = req.body
//   const sql = `insert into blog value ('${bodyData.name}','${bodyData.content}')`
//   connection.query(sql, (err, result) => {
//     if (err) {
//       res.send(err)
//     }
//     res.send(result)
//   })
// })

