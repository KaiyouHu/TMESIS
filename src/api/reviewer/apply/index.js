import request from '@/plugin/axios'

export function GetApply (data) {
  return request({
    url: '/reviewer/apply',
    method: 'post',
    data
  })
}
