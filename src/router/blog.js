const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  if (method === 'GET' && req.path === '/api/blog/list') {
    let author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)



    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }


  if (method === 'GET' && req.path === '/api/blog/detail') {

    // const data = getDetail(id)
    // return new SuccessModel(data)
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  if (method === 'POST' && req.path === '/api/blog/new') {
    // const blogData = req.body
    // const data = newBlog(blogData)
    // return new SuccessModel(data)
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }
      else {
        return new ErrorModel('更新失败')
      }
    })

  }

  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: '删除博客接口'
    }
  }
}
module.exports = handleBlogRouter 