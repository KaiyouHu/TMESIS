import request from '@/plugin/axios'

export function GetImportance (data) {
  return request({
    url: '/provider/importance',
    method: 'post',
    data
  })
}
