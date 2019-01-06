// 菜单
export default [
  // 管理员
  {
    title: '管理员',
    icon: 'folder-o',
    children: [
      // 网页配置
      {
        title: '网页配置',
        icon: 'folder-o',
        children: [
          { path: '/admin/webconfig/index1', title: '网页配置' }
        ]
      },
      // 用户配置
      {
        title: '用户配置',
        icon: 'folder-o',
        children: [
          { path: '/admin/usermanagement/index1', title: '账户信息查看' }
        ]
      }
    ]
  }
]
