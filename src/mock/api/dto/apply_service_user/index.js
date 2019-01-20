import Mock from 'mockjs'
import { applyDB } from '@/mock/db/apply'
import { serviceDB } from '@/mock/db/service'
import { companyDB } from '@/mock/db/company'
import { userDB } from '@/mock/db/user'

/**
 * @author Kaiyou Hu
 * @data 2018/12/10
 * @description asu dto 表示申请、服务、公司和用户的关系
 */

/**
 * @author Kaiyou Hu
 * @data 2018/12/9
 * @description asu添加
 * @param
 * @return
 */
// 添加asu
// src: /api/dto/createasu
// data: form asu
Mock.mock('/api/dto/asu/create', 'post', ({ url, type, body }) => {
  let bodyObj = JSON.parse(body)
  let asu = applyDB
  if (asu) {
    return {
      code: 0,
      msg: '插入asu成功',
      data: [
        ...asu
      ]
    }
  } else {
    return {
      code: 401,
      msg: '插入asu错误',
      data: {}
    }
  }
})

// 查询asu
// src: /api/dto/asu/retrieve
// data: form asu
Mock.mock('/api/dto/asu/retrieve', 'post', ({ url, type, body }) => {
  let bodyObj = JSON.parse(body)
  let asu = applyDB.filter(e => e.apply_status === bodyObj.apply_status && e.apply_flag === bodyObj.apply_flag)
  for (let apply in asu) {
    // Object.setPrototypeOf(applyDB[apply],serviceDB.find(e=>e.service_id === applyDB[apply].service_id))
    asu[apply] = extend(asu[apply], serviceDB.find(e => e.service_id === asu[apply].service_id))
    asu[apply] = extend(asu[apply], companyDB.find(e => e.company_id === asu[apply].company_id))
    asu[apply] = extend(asu[apply], userDB.find(e => e.uuid === asu[apply].user_id))
  }
  // let asu = applyDB // .filter(e => e.flag === bodyObj.flag && e.user_id === bodyObj.user_id) // .find()

  if (asu) {
    return {
      code: 0,
      msg: '查询asu成功',
      data: [
        ...asu
      ]
    }
  } else {
    return {
      code: 401,
      msg: '查询asu错误',
      data: {}
    }
  }
})

Mock.mock('/api/dto/asu/update', 'post', ({ url, type, body }) => {
  let bodyObj = JSON.parse(body)
  applyDB[applyDB.findIndex(e => e.apply_id === bodyObj.apply_id)].apply_status = '3'
  let asu = applyDB
  for (let apply in asu) {
    // Object.setPrototypeOf(applyDB[apply],serviceDB.find(e=>e.service_id === applyDB[apply].service_id))
    asu[apply] = extend(asu[apply], serviceDB.find(e => e.service_id === asu[apply].service_id))
    asu[apply] = extend(asu[apply], companyDB.find(e => e.company_id === asu[apply].company_id))
    asu[apply] = extend(asu[apply], userDB.find(e => e.uuid === asu[apply].user_id))
  }
  // let asu = applyDB // .filter(e => e.flag === bodyObj.flag && e.user_id === bodyObj.user_id) // .find()

  if (asu) {
    return {
      code: 0,
      msg: '更新asu成功',
      data: [
        ...asu
      ]
    }
  } else {
    return {
      code: 401,
      msg: '更新asu错误',
      data: {}
    }
  }
})

// 合并对象
function extend (target, source) {
  for (var obj in source) {
    target[obj] = source[obj]
  } return target
} // 测试
