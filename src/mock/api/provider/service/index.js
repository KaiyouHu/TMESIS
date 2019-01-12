import Mock from 'mockjs'
import { serviceDB } from '@/mock/db/service'
import { applyDB } from '@/mock/db/apply'

Mock.mock('/api/provider/service', 'post', ({ url, type, body }) => {
  let bodyObj = JSON.parse(body)
  console.log('mock:' + JSON.stringify(bodyObj))
  bodyObj.service_id = generateUUID()
  serviceDB.push(bodyObj)
  let service = serviceDB
  console.log('service:' + JSON.stringify(service))
  // 同时生成申请
  let apply = {
    'apply_id': generateUUID(),
    'company_id': bodyObj.company_id,
    'apply_status': '1',
    'service_id': bodyObj.service_id,
    'apply_date': (new Date()).Format('dd/MM/yyyy hh:mm:ss'),
    'apply_flag': '1'
  }
  applyDB.push(apply)
  console.log('apply' + JSON.stringify(apply))
  if (service) {
    return {
      code: 0,
      msg: '添加service成功',
      data: [
        ...service
      ]
    }
  } else {
    return {
      code: 401,
      msg: '添加service错误',
      data: {}
    }
  }
})

function generateUUID () {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
  return uuid
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ===> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")   ===> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}
