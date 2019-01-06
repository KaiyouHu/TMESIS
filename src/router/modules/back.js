import layoutHeaderAside from '@/layout/header-aside'
import admin from './admin'
import provider from './provider'
import reviewer from './reviewer'
import monitor from './monitor'

const meta = { requiresAuth: true }

export default {
  path: '/',
  name: 'TMESIS',
  meta,
  redirect: { name: 'TMESIS' },
  component: layoutHeaderAside,
  children: [
    admin,
    provider,
    reviewer,
    monitor
  ]
}
