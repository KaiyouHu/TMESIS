// 审核者菜单
export default [
  // 审核者
  {
    title: '审核者',
    icon: 'folder-o',
    children: [
      // 认证申请审核模块
      {
        title: '认证申请审核',
        icon: 'folder-o',
        children: [
          { path: '/reviewer/certificationreview/index1', title: '未审核公司申请' },
          { path: '/reviewer/certificationreview/index6', title: '已审核公司申请' },
          { path: '/reviewer/certificationreview/index2', title: '未审核服务申请' },
          { path: '/reviewer/certificationreview/index3', title: '已审核服务申请' },
          { path: '/reviewer/certificationreview/index4', title: '未审核申请处理' },
          { path: '/reviewer/certificationreview/index5', title: '已审核申请文档' }

        ]
      },

      // 管理模块
      {
        title: '账号信息管理',
        icon: 'folder-o',
        children: [
          { path: '/reviewer/accountmanagement/index1', title: '账户信息查看' },
          { path: '/reviewer/accountmanagement/index2', title: '账户信息修改' }
        ]
      }
    ]
  }
]
