import request from '@/plugin/axios'

export function GetService (data) {
  return request({
    url: '/reviewer/service',
    method: 'post',
    data
  })
}
