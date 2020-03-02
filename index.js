const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
// nodejs自带模块
const querystring = require('querystring')

//处理post传过来的数据
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {

    if (req.method !== 'POST') {
      resolve({})
      return
    }

    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }

    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.stringify(postData)
      )
    })

  })
  return promise
}

// 服务器要做的事
const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', '*');

  const url = req.url
  req.path = url.split('?')[0]
  //字符串解析成对象
  req.query = querystring.parse(url.split('?')[1])


  getPostData(req).then(postData => {
    req.body = postData


    const blogResult = handleBlogRouter(req, res)
    if (blogResult) {
      blogResult.then(blogData => {
        res.end(
          JSON.stringify(blogData)
        )
      })
      return
    }



    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
      return
    }
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write("请求失败")
    res.end()
  })



}

module.exports = serverHandle