import request from '@/plugin/axios'

export function CreateCompany (data) {
  return request({
    url: '/provider/company/create',
    method: 'post',
    data
  })
}

export function RetrieveCompany (data) {
  return request({
    url: '/provider/company/retrieve',
    method: 'post',
    data
  })
}

export function UpdateCompany (data) {
  return request({
    url: '/provider/company/update',
    method: 'post',
    data
  })
}

export function DeleteCompany (data) {
  return request({
    url: '/provider/company/delete',
    method: 'post',
    data
  })
}
