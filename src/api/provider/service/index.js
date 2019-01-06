import request from '@/plugin/axios'

export function AddService (data) {
  return request({
    url: '/provider/service',
    method: 'post',
    data
  })
}
