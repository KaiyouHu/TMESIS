const meta = { requiresAuth: true }

export default {
  path: 'reviewer',
  name: 'reviewer',
  component: () => import('@/pages/reviewer'),
  meta: { meta, title: '审核者' },
  children: (pre => [
    { path: 'certificationreview',
      name: `${pre}certificationreview`,
      component: () => import('@/pages/reviewer/certificationreview/index'),
      meta: { meta, title: '认证申请管理' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/reviewer/certificationreview/index1'),
          meta: { meta, title: '未审核公司申请' }
        },
        { path: 'index2',
          name: `${pre}index2`,
          component: () => import('@/pages/reviewer/certificationreview/index2'),
          meta: { meta, title: '未审核服务申请' }
        },
        { path: 'index3',
          name: `${pre}index3`,
          component: () => import('@/pages/reviewer/certificationreview/index3'),
          meta: { meta, title: '已审核申请处理' }
        },
        { path: 'index4',
          name: `${pre}index4`,
          component: () => import('@/pages/reviewer/certificationreview/index4'),
          meta: { meta, title: '未审核申请处理' }
        },
        { path: 'index5',
          name: `${pre}index5`,
          component: () => import('@/pages/reviewer/certificationreview/index5'),
          meta: { meta, title: '已审核申请处理文档审查' }
        },
        { path: 'index6',
          name: `${pre}index6`,
          component: () => import('@/pages/reviewer/certificationreview/index6'),
          meta: { meta, title: '审核者-已审核公司申请' }
        }
      ])('reviewer-certificationreview-')
    },
    { path: 'accountmanagement',
      name: `${pre}accountmanagement`,
      component: () => import('@/pages/reviewer'),
      meta: { meta, title: '账号信息管理' },
      children: (pre => [
        { path: 'index1',
          name: `${pre}index1`,
          component: () => import('@/pages/reviewer/accountmanagement/index1'),
          meta: { meta, title: '账号信息查看' }
        },
        { path: 'index2',
          name: `${pre}index2`,
          component: () => import('@/pages/reviewer/accountmanagement/index2'),
          meta: { meta, title: '账号信息修改' }
        }
      ])('reviewer-accountmanagement-')
    }
  ])('reviewer-')
}
