import index from './index/index'
import admin from './admin/admin'
import provider from './provider/provider'
import reviewer from './reviewer/reviewer'
import monitor from './monitor/monitor'

// 菜单
export default [
  ...index,
  {
    title: '演示页面',
    icon: 'folder-o',
    children: [
      // 管理员
      ...admin,

      // 提供商
      ...provider,

      // 审核者
      ...reviewer,

      // 监察者
      ...monitor
    ]
  }
]
