// 提供商
const providerLink = {
  title: '提供商',
  icon: 'folder-o',
  children: [
    // 申请认证填写模块
    {
      title: '申请认证填写',
      icon: 'folder-o',
      children: [
        { path: '/provider/certificationapplication/index1', title: '公司信息填写' },
        { path: '/provider/certificationapplication/index3', title: '服务信息填写' },
        { path: '/provider/certificationapplication/index2', title: '服务重要性认定' }
      ]
    },

    // 认证申请管理模块
    {
      title: '认证申请管理',
      icon: 'folder-o',
      children: [
        { path: '/provider/certificationmanagement/index1', title: '未审核申请管理' },
        { path: '/provider/certificationmanagement/index2', title: '已审核申请管理' },
        { path: '/provider/certificationmanagement/index3', title: '已驳回申请管理' },
        { path: '/provider/certificationmanagement/index4', title: '已评定申请管理' },
        { path: '/provider/certificationmanagement/index5', title: '已标识申请管理' },
        { path: '/provider/certificationmanagement/index6', title: '未审核公司申请' },
        { path: '/provider/certificationmanagement/index7', title: '已审核公司申请' }
      ]
    },

    // 账号信息管理模块
    {
      title: '账号信息管理',
      icon: 'folder-o',
      children: [
        { path: '/provider/accountmanagement/index1', title: '账户信息查看' },
        { path: '/provider/accountmanagement/index2', title: '账户信息修改' }
      ]
    }
  ]
}

// 提供商菜单
export default [
  providerLink
]
