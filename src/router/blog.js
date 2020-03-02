const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method


  if (method === 'GET' && req.path === '/api/blog/list') {
    Console.log('接受成功')
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    const result = getList(author, keyword)
    result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  if (method === 'GET' && req.path === '/api/blog/detail') {
    const id = req.query.id
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    const blogData = req.body
    const data = newBlog(blogData)
    return new SuccessModel(data)
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, red.body)
    if (result) {
      return new SuccessModel()
    }
    else {
      return new ErrorModel('失败')
    }
  }

  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: '删除博客接口'
    }
  }
}
module.exports = handleBlogRouter 