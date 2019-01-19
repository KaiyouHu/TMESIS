// 菜单
export default [
  // 管理员
  {
    title: '管理员',
    icon: 'folder-o',
    children: [
      // 网站管理
      {
        title: '网站管理',
        icon: 'folder-o',
        children: [
          { path: '/admin/webconfig/index1', title: '网站配置' }
        ]
      },
      // 用户管理
      {
        title: '用户配置',
        icon: 'folder-o',
        children: [
          { path: '/admin/usermanagement/index1', title: '账户管理' }
        ]
      }
    ]
  }
]
