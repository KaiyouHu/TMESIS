import request from '@/plugin/axios'

export function RetrieveCompany (data) {
  return request({
    url: '/reviewer/company/retrieve',
    method: 'post',
    data
  })
}

export function UpdateCompany (data) {
  return request({
    url: '/reviewer/company/update',
    method: 'post',
    data
  })
}
