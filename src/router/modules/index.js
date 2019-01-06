import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/',
  redirect: { name: 'index' },
  component: layoutHeaderAside,
  children: [
    {
      path: 'index',
      name: 'index',
      meta,
      component: () => import('@/pages/index')
    }
  ]
}
