import Mock from 'mockjs'
import { companyDB } from '@/mock/db/company'
// 添加company
// src: /api/provider/createcompany
// data: form company
Mock.mock('/api/provider/company/create', 'post', ({ url, type, body }) => {
  let bodyObj = JSON.parse(body)
  console.log('mock:' + JSON.stringify(bodyObj))
  bodyObj.company_num = '201812060001'
  bodyObj.company_id = generateUUID()
  bodyObj.flag = '0'
  companyDB.push(bodyObj)
  let company = companyDB // .find()
  console.log('company:' + JSON.stringify(company))
  if (company) {
    return {
      code: 0,
      msg: '插入company成功',
      data: [
        ...company
      ]
    }
  } else {
    return {
      code: 401,
      msg: '插入company错误',
      data: {}
    }
  }
})

// 查询company
// src: /api/provider/company/retrieve
// data: form company
Mock.mock('/api/provider/company/retrieve', 'post', ({ url, type, body }) => {
  let bodyObj = JSON.parse(body)
  console.log('bodyObj:' + JSON.stringify(bodyObj))
  let company = companyDB.filter(e => e.flag === bodyObj.flag && e.user_id === bodyObj.user_id).reverse() // .find()
  console.log('company:' + JSON.stringify(company))
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

function generateUUID () {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}
