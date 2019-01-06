const meta = { requiresAuth: true }

export default {
  path: 'admin',
  name: 'admin',
  component: () => import('@/pages/admin/index'),
  meta: { meta, title: '管理员' },
  children: (pre => [
    { path: 'webconfig',
      name: `${pre}admin`,
      component: () => import('@/pages/admin/webconfig/index'),
      meta: { meta, title: '网站管理' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/admin/webconfig/index1'),
          meta: { meta, title: '网站管理' }
        }
      ])('admin-webconfig-')
    },
    { path: 'usermanagement',
      name: `${pre}usermanagement`,
      component: () => import('@/pages/admin/usermanagement/index'),
      meta: { meta, title: '用户管理' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/admin/usermanagement/index1'),
          meta: { meta, title: '用户管理' }
        }
      ])('admin-usermanagement-')
    }
  ])('admin-')
}
