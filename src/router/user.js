const handleUserRouter = (req, res) => {
  const method = req.method


  if (method === 'POST' && path === '/api/blog/user') {
    return {
      msg: '登录接口'
    }
  }
}

module.exports = handleUserRouter