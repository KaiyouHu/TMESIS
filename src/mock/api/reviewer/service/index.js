import Mock from 'mockjs'
import { serviceDB } from '@/mock/db/service'

Mock.mock('/api/reviewer/service', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  console.log('mock:' + JSON.stringify(bodyObj))
  const service = serviceDB // .find()
  if (service) {
    return {
      code: 0,
      msg: '查询service成功',
      data: [
        ...service
      ]
    }
  } else {
    return {
      code: 401,
      msg: '查询service错误',
      data: {}
    }
  }
})
