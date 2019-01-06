// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      // 管理员
      { path: '/demo/admin', title: '管理员' },

      // 提供商
      {
        title: '提供商',
        icon: 'folder-o',
        children: [
          // 申请认证填写模块
          {
            title: '申请认证填写',
            icon: 'folder-o',
            children: [
              { path: '/demo/provider/certificationapplication/index1', title: '公司基本信息填写' },
              { path: '/demo/provider/certificationapplication/index2', title: '服务重要性认定' },
              { path: '/demo/provider/certificationapplication/index3', title: '服务信息填写' }
            ]
          },

          // 认证申请管理模块
          {
            title: '认证申请管理',
            icon: 'folder-o',
            children: [
              { path: '/demo/provider/certificationmanagement/index1', title: '未审核申请管理' },
              { path: '/demo/provider/certificationmanagement/index2', title: '已审核申请管理' },
              { path: '/demo/provider/certificationmanagement/index3', title: '已驳回申请管理' },
              { path: '/demo/provider/certificationmanagement/index4', title: '已评定申请管理' },
              { path: '/demo/provider/certificationmanagement/index5', title: '已标识申请管理' }
            ]
          },

          // 账号信息管理模块
          {
            title: '账号信息管理',
            icon: 'folder-o',
            children: [
              { path: '/demo/provider/accountmanagement/index1', title: '账户信息查看' },
              { path: '/demo/provider/accountmanagement/index2', title: '账户信息修改' }
            ]
          }
        ]
      },

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
              { path: '/demo/reviewer/certificationreview/index1', title: '未审核申请信息审核-公司基本信息' },
              { path: '/demo/reviewer/certificationreview/index2', title: '未审核申请信息审核-服务基本信息' },
              { path: '/demo/reviewer/certificationreview/index3', title: '已审核申请处理' },
              { path: '/demo/reviewer/certificationreview/index4', title: '未审核申请处理' },
              { path: '/demo/reviewer/certificationreview/index5', title: '已审核申请处理文档审查' }
            ]
          },

          // 账号信息管理模块
          {
            title: '账号信息管理',
            icon: 'folder-o',
            children: [
              { path: '/demo/reviewer/accountmanagement/index1', title: '账户信息查看' },
              { path: '/demo/reviewer/accountmanagement/index2', title: '账户信息修改' }
            ]
          }
        ]
      },

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
              { path: '/demo/monitor/certificationmanagement/index1', title: '安全认证监查' }
            ]
          },

          // 账号信息管理模块
          {
            title: '账号信息管理',
            icon: 'folder-o',
            children: [
              { path: '/demo/monitor/accountmanagement/index1', title: '账户信息查看' },
              { path: '/demo/monitor/accountmanagement/index2', title: '账户信息修改' }
            ]
          }
        ]
      }
    ]
  }
]
