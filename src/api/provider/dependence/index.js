import request from '@/plugin/axios'

export function GetDependence (data) {
  return request({
    url: '/provider/dependence',
    method: 'post',
    data
  })
}
