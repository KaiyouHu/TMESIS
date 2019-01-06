import Mock from 'mockjs'
import { dependenceDB } from '@/mock/db/dependence'

Mock.mock('/api/provider/dependence', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  console.log('mock:' + JSON.stringify(bodyObj))
  const dependence = dependenceDB // .find()
  if (dependence) {
    return {
      code: 0,
      msg: 'dependence',
      data: [
        ...dependence
      ]
    }
  } else {
    return {
      code: 401,
      msg: 'dependence',
      data: {}
    }
  }
})
