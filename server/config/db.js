const mysql = require('mysql')
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '19920115asd',
  database: 'antd-admin'
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(JSON.stringify(rows)))
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }
