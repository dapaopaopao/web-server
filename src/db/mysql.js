const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '15215819755',
  database: 'myblog'
})


connection.connect()


function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return
      }
      resolve(result)
    })
  })
  return promise
}


module.exports = exec