const exec = require('../db/mysql')


const getList = (author, keyword) => {
  let sql = `select * from blog where 1=1 `
  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  // 返回 promise
  return exec(sql)
}


const getDetail = (id) => {
  const sql = `select * from blog where id='${id}'`

  // exec返回的是个数组 里面有对象
  return exec(sql).then(rows => {


    //数组里的第一个对象

    return rows[0]
  })
}

const newBlog = (blogData = {}) => {
  const title = blogData.title
  const author = blogData.author
  const content = blogData.content
  const createtime = Date.now()
  //数字格式可以不加单引号
  const sql = `
  insert into blog  (author,content,createtime,title)
  value ('${author}','${content}','${createtime}','${title}');
  `
  return exec(sql).then(insertData => {
    console.log(insertData)
    return {
      id: insertData.insertId
    }
  })
}

const updateBlog = (id, blogData = {}) => {
  const title = blogData.title
  const content = blogData.content
  const sql = `
    update blog set title='${title}',content='${content}' where id=${id}
    `

  return exec(sql).then(updateData => {
    console.log('updateData is', updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}



const deleteBlog = (id, author) => {
  const sql = `
delete from blog where id=${id} and author='${author}'
`
  return exec(sql).then(deleteData => {
    console.log('updateData is', deleteData)
    if (deleteData.affectedRows > 0) {
      return true
    }
    return false
  })
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}