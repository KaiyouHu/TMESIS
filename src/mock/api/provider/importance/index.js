import Mock from 'mockjs'
import { importanceDB } from '@/mock/db/importance'

Mock.mock('/api/provider/importance', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  console.log('mock:' + JSON.stringify(bodyObj))
  const importance = importanceDB // .find()
  if (importance) {
    return {
      code: 0,
      msg: '查询importance成功',
      data: [
        ...importance
      ]
    }
  } else {
    return {
      code: 401,
      msg: '查询importance错误',
      data: {}
    }
  }
})
