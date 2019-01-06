// 监察者菜单
export default [
  // 监察者
  {
    title: '监察者',
    icon: 'folder-o',
    children: [
      // 认证申请审核模块
      {
        title: '认证申请审核',
        icon: 'folder-o',
        children: [
          { path: '/monitor/certificationmanagement/index1', title: '安全认证监查' }
        ]
      },

      // 账号信息管理模块
      {
        title: '账号信息管理',
        icon: 'folder-o',
        children: [
          { path: '/monitor/accountmanagement/index1', title: '账户信息查看' },
          { path: '/monitor/accountmanagement/index2', title: '账户信息修改' }
        ]
      }
    ]
  }
]
