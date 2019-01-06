import Mock from 'mockjs'
import { companyDB } from '@/mock/db/company'

Mock.mock('/api/reviewer/company/retrieve', 'post', ({ url, type, body }) => {
  let bodyObj = JSON.parse(body)
  console.log('/api/reviewer/company:' + JSON.stringify(companyDB))
  let company = companyDB.filter(e => e.flag === bodyObj.flag).reverse() // .find()
  if (company) {
    return {
      code: 0,
      msg: '查询company成功',
      data: [
        ...company
      ]
    }
  } else {
    return {
      code: 401,
      msg: '查询company错误',
      data: {}
    }
  }
})

Mock.mock('/api/reviewer/company/update', 'post', ({ url, type, body }) => {
  const bodyObj = JSON.parse(body)
  companyDB[companyDB.findIndex(e => e.company_id === bodyObj.company_id)] = bodyObj // .find()
  const company = companyDB // .find()
  if (company) {
    return {
      code: 0,
      msg: '修改company成功',
      data: [
        ...company
      ]
    }
  } else {
    return {
      code: 401,
      msg: '修改company错误',
      data: {}
    }
  }
})
