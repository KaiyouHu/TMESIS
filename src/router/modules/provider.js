const meta = { requiresAuth: true }

export default {
  path: 'provider',
  name: 'provider',
  meta: { meta, title: '提供商' },
  component: () => import('@/pages/provider/index'),
  children: (pre => [
    { path: 'certificationapplication',
      name: `${pre}certificationapplication`,
      component: () => import('@/pages/provider/certificationapplication/index'),
      meta: { meta, title: '申请认证填写' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/provider/certificationapplication/index1'),
          meta: { meta, title: '公司基本信息填写' }
        },
        { path: 'index2',
          name: `${pre}index2`,
          component: () => import('@/pages/provider/certificationapplication/index2'),
          meta: { meta, title: '服务重要性认定' }
        },
        { path: 'index3',
          name: `${pre}index3`,
          component: () => import('@/pages/provider/certificationapplication/index3'),
          meta: { meta, title: '服务信息填写' }
        }
      ])('provider-certificationapplication-')
    },
    { path: 'certificationmanagement',
      name: `${pre}certificationmanagement`,
      component: () => import('@/pages/reviewer'),
      meta: { meta, title: '认证申请管理' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/provider/certificationmanagement/index1'),
          meta: { meta, title: '未审核申请管理' }
        },
        { path: 'index2',
          name: `${pre}index2`,
          component: () => import('@/pages/provider/certificationmanagement/index2'),
          meta: { meta, title: '已审核申请管理' }
        },
        { path: 'index3',
          name: `${pre}index3`,
          component: () => import('@/pages/provider/certificationmanagement/index3'),
          meta: { meta, title: '已驳回申请管理' }
        },
        { path: 'index4',
          name: `${pre}index4`,
          component: () => import('@/pages/provider/certificationmanagement/index4'),
          meta: { meta, title: '已评定申请管理' }
        },
        { path: 'index5',
          name: `${pre}index5`,
          component: () => import('@/pages/provider/certificationmanagement/index5'),
          meta: { meta, title: '已标识申请管理' }
        },
        { path: 'index6',
          name: `${pre}index6`,
          component: () => import('@/pages/provider/certificationmanagement/index6'),
          meta: { meta, title: '提供商-未审核公司申请' }
        },
        { path: 'index7',
          name: `${pre}index7`,
          component: () => import('@/pages/provider/certificationmanagement/index7'),
          meta: { meta, title: '提供商-已审核公司申请' }
        }
      ])('provider-certificationmanagement-')
    },
    { path: 'accountmanagement',
      name: `${pre}accountmanagement`,
      component: () => import('@/pages/reviewer'),
      meta: { meta, title: '账号信息管理' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/provider/accountmanagement/index1'),
          meta: { meta, title: '账户信息查看' }
        },
        { path: 'index2',
          name: `${pre}index2`,
          component: () => import('@/pages/provider/accountmanagement/index2'),
          meta: { meta, title: '账户信息修改' }
        }
      ])('provider-accountmanagement-')
    }
  ])('provider-')
}
