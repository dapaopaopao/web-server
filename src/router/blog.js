const handleBlogRouter = (req, res) => {
  const method = req.method


  if (method === 'GET' && path === '/api/blog/list') {
    return {
      msg: '获取博客列表接口'
    }
  }

  if (method === 'POST' && path === '/api/blog/new') {
    return {
      msg: '新建博客接口'
    }
  }

  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: '更新博客接口'
    }
  }

  if (method === 'GET' && path === '/api/blog/delete') {
    return {
      msg: '删除博客接口'
    }
  }
}
module.exports = handleBlogRouter 