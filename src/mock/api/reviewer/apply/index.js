import Mock from 'mockjs'
import { applyDB } from '@/mock/db/apply'

Mock.mock('/api/reviewer/apply', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  const apply = applyDB.filter(e => e.apply_status === bodyObj.apply_status)
  if (apply) {
    return {
      code: 0,
      msg: '查询apply成功',
      data: [
        ...apply
      ]
    }
  } else {
    return {
      code: 401,
      msg: '查询apply错误',
      data: {}
    }
  }
})
