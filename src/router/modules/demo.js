import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/demo',
  name: 'demo',
  meta,
  redirect: { name: 'demo-page1' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'admin',
      name: `${pre}admin`,
      component: () => import('@/pages/demo/admin/index'),
      meta: { meta, title: '管理员' }
    },
    {
      path: 'provider',
      name: `${pre}provider`,
      meta: { meta, title: '提供商' },
      component: () => import('@/pages/demo/provider/index'),
      children: (pre => [
        { path: 'certificationapplication',
          name: `${pre}certificationapplication`,
          component: () => import('@/pages/demo/provider/certificationapplication/index'),
          meta: { meta, title: '申请认证填写' },
          children: (pre => [
            { path: 'index1',
              name: `${pre}index1`,
              component: () => import('@/pages/demo/provider/certificationapplication/index1'),
              meta: { meta, title: '公司信息填写' }
            },
            { path: 'index2',
              name: `${pre}index2`,
              component: () => import('@/pages/demo/provider/certificationapplication/index2'),
              meta: { meta, title: '服务重要性认定' }
            },
            { path: 'index3',
              name: `${pre}index3`,
              component: () => import('@/pages/demo/provider/certificationapplication/index3'),
              meta: { meta, title: '服务信息填写' }
            }
          ])('demo-provider-certificationapplication-')
        },
        { path: 'certificationmanagement',
          name: `${pre}certificationmanagement`,
          component: () => import('@/pages/demo/reviewer'),
          meta: { meta, title: '认证申请管理' }
        },
        { path: 'accountmanagement',
          name: `${pre}accountmanagement`,
          component: () => import('@/pages/demo/reviewer'),
          meta: { meta, title: '账号信息管理' }
        }
      ])('demo-provider-')
    },
    { path: 'reviewer',
      name: `${pre}reviewer`,
      component: () => import('@/pages/demo/reviewer'),
      meta: { meta, title: '审核者' },
      children: (pre => [
        { path: 'certificationreview',
          name: `${pre}certificationreview`,
          component: () => import('@/pages/demo/reviewer/certificationreview/index'),
          meta: { meta, title: '认证申请管理' },
          children: (pre => [
            { path: 'index1',
              name: `${pre}index1`,
              component: () => import('@/pages/demo/reviewer/certificationreview/index1'),
              meta: { meta, title: '未审核申请信息审核-公司基本信息' }
            },
            { path: 'index2',
              name: `${pre}index2`,
              component: () => import('@/pages/demo/reviewer/certificationreview/index2'),
              meta: { meta, title: '未审核申请信息审核-服务基本信息' }
            },
            { path: 'index3',
              name: `${pre}index3`,
              component: () => import('@/pages/demo/reviewer/certificationreview/index3'),
              meta: { meta, title: '已审核申请处理' }
            },
            { path: 'index4',
              name: `${pre}index4`,
              component: () => import('@/pages/demo/reviewer/certificationreview/index4'),
              meta: { meta, title: '未审核申请处理' }
            },
            { path: 'index5',
              name: `${pre}index5`,
              component: () => import('@/pages/demo/reviewer/certificationreview/index5'),
              meta: { meta, title: '已审核申请处理文档审查' }
            }
          ])('demo-reviewer-certificationreview-')
        },
        { path: 'accountmanagement',
          name: `${pre}accountmanagement`,
          component: () => import('@/pages/demo/reviewer'),
          meta: { meta, title: '账号信息管理' }
        }
      ])('demo-reviewer-')
    },
    { path: 'monitor',
      name: `${pre}monitor`,
      component: () => import('@/pages/demo/monitor'),
      meta: { meta, title: '监察者' }
    }
  ])('demo-')
}
