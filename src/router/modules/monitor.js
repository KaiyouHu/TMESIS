const meta = { requiresAuth: true }

export default {
  path: 'monitor',
  name: 'monitor',
  component: () => import('@/pages/monitor'),
  meta: { meta, title: '监察者' },
  children: (pre => [
    { path: 'certificationmanagement',
      name: `${pre}certificationmanagement`,
      component: () => import('@/pages/monitor/certificationmanagement/index'),
      meta: { meta, title: '认证申请审核' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/monitor/certificationmanagement/index1'),
          meta: { meta, title: '认证申请审核' }
        }
      ])('monitor-certificationmanagement-')
    },
    { path: 'accountmanagement',
      name: `${pre}accountmanagement`,
      component: () => import('@/pages/monitor/accountmanagement/index'),
      meta: { meta, title: '账号信息管理' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/monitor/accountmanagement/index1'),
          meta: { meta, title: '账号信息管理' }
        }
      ])('monitor-accountmanagement-')
    }
  ])('monitor-')
}
