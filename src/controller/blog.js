const exec = require('../db/mysql')


const getList = (author, keyword) => {
  let sql = `select * from blog  where 1=1`

  if (author) {
    sql += `and author='${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }



  return exec(sql)
}


const getDetail = (id) => {

}


const newBlog = (blogData = {}) => {

}

const updateBlog = (id, blogData = {}) => {
  return true
}


const deleteBlog = (id) => {

}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}