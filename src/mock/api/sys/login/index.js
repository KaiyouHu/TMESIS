import Mock from 'mockjs'
import { userDB } from '@/mock/db/user'

Mock.mock('/api/login', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  console.log('mock:' + JSON.stringify(bodyObj))
  const user = userDB.find(e => e.username === bodyObj.username && e.password === bodyObj.password && e.usertype === bodyObj.usertype)
  if (user) {
    return {
      code: 0,
      msg: '登录成功',
      data: {
        ...user,
        token: 'd787syv8dys8cas80d9s0a0d8f79ads56f7s4d56f879a8as89fd980s7dg'
      }
    }
  } else {
    return {
      code: 401,
      msg: '用户名、密码或者用户类型错误',
      data: {}
    }
  }
})
