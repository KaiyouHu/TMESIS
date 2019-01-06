import request from '@/plugin/axios'

export function CreateASU (data) {
  return request({
    url: '/dto/asu/create',
    method: 'post',
    data
  })
}

export function RetrieveASU (data) {
  return request({
    url: '/dto/asu/retrieve',
    method: 'post',
    data
  })
}

export function UpdateASU (data) {
  return request({
    url: '/dto/asu/update',
    method: 'post',
    data
  })
}

export function DeleteASU (data) {
  return request({
    url: '/dto/asu/delete',
    method: 'post',
    data
  })
}
