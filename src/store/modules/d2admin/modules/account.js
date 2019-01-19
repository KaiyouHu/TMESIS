import util from '@/libs/util.js'
import { AccountLogin } from '@/api/sys/login'
import { header } from '@/menu/header'
import { aside } from '@/menu/aside'
import index from '@/menu/index/index'

// 添加不同类型的链接

import admin from '@/menu/admin/admin'
import provider from '@/menu/provider/provider'
import reviewer from '@/menu/reviewer/reviewer'
import monitor from '@/menu/monitor/monitor'

export default {
  namespaced: true,
  actions: {
    /**
     * @description 登录
     * @param {Object} param context
     * @param {Object} param vm {Object} vue 实例
     * @param {Object} param username {String} 用户账号
     * @param {Object} param password {String} 密码
     * @param {Object} param usertype {String} 用户类型
     * @param {Object} param route {Object} 登录成功后定向的路由对象
     */
    login ({ dispatch }, {
      vm,
      username,
      password,
      usertype,
      route = {
        name: 'index'
      }
    }) {
      // 开始请求登录接口
      AccountLogin({
        username,
        password,
        usertype
      })
        .then(async res => {
          // 设置 cookie 一定要存 uuid 和 token 两个 cookie
          // 整个系统依赖这两个数据进行校验和存储
          // uuid 是用户身份唯一标识 用户注册的时候确定 并且不可改变 不可重复
          // token 代表用户当前登录状态 建议在网络请求中携带 token
          // 如有必要 token 需要定时更新，默认保存一天
          console.log('login res:' + JSON.stringify(res))
          util.cookies.set('uuid', res.uuid)
          util.cookies.set('token', res.token)

          // 早期设计 -----
          // 直接内置四种用户类型：admin provider reviewer monitor
          // 通过用户类型配置当前用户的链接表 (header and aside) ！路由表

          /*  早期menu设计方法，暂时保留 */
          // （未完成）完整设计
          // 后台仅返回链接表
          /* let menuHeader = []
          let menuAside = []
          switch (res.usertype) {
            // 管理员目前仅供开发使用
            case 'admin':
              menuHeader = header
              menuAside = aside
              console.log('admin')
              break
            case 'provider':
              menuHeader = [ ...index, ...(provider[0].children) ]
              // menuHeader.push(...provider)
              menuAside = [ ...index, ...(provider[0].children) ]
              // menuAside.push(...provider)
              // menuHeader.push(...(provider[0].children))
              // menuAside.push(...(provider[0].children))
              console.log('provider')
              break
            case 'reviewer':
              menuHeader = [ ...index, ...(reviewer[0].children) ]
              // menuHeader.push(...provider)
              menuAside = [ ...index, ...(reviewer[0].children) ]
              console.log('reviewer')
              break
            case 'monitor':
              menuHeader = [ ...index, ...(monitor[0].children) ]
              // menuHeader.push(...provider)
              menuAside = [ ...index, ...(monitor[0].children) ]
              console.log('monitor')
              break
          } */
          /*  早期menu设计方法，暂时保留 */

          /*  menu分离设计方法 */
          // 异步获取菜单
          let menu = []
          switch (res.usertype) {
            // 管理员目前仅供开发使用
            case 'admin':
              // menu = header
              // menu = aside
              menu = [...index, ...(admin[0].children)]
              break
            case 'provider':
              menu = [...index, ...(provider[0].children)]
              break
            case 'reviewer':
              menu = [...index, ...(reviewer[0].children)]
              break
            case 'monitor':
              menu = [...index, ...(monitor[0].children)]
              break
            case 'sa':
              menu = header
              break
          }
          /*  menu分离设计方法 */

          /*  早期menu设计方法，暂时保留 */
          // 异步设置顶栏菜单
          // await dispatch('d2admin/menu/headerSet', { menuHeader }, { root: true })
          // 异步设置侧边菜单
          // await dispatch('d2admin/menu/asideSet', { menuAside }, { root: true })
          /*  早期menu设计方法，暂时保留 */

          // 异步设置顶栏、侧栏菜单
          await dispatch('d2admin/menu/set', {
            userMenu: menu
          }, { root: true })

          // 设置 vuex 用户信息
          await dispatch('d2admin/user/set', {
            name: res.name
          }, { root: true })
          // 用户登录后从持久化数据加载一系列的设置
          await dispatch('load')
          // 更新路由 尝试去获取 cookie 里保存的需要重定向的页面完整地址
          const path = util.cookies.get('redirect')
          // 根据是否存有重定向页面判断如何重定向
          vm.$router.replace(path ? { path } : route)
          // 删除 cookie 中保存的重定向页面
          util.cookies.remove('redirect')
        })
        .catch(err => {
          console.log('err: ', err)
        })
    },
    /**
     * @description 注销用户并返回登录页面
     * @param {Object} param context
     * @param {Object} param vm {Object} vue 实例
     * @param {Object} param confirm {Boolean} 是否需要确认
     */
    logout ({ commit }, { vm, confirm = false }) {
      /**
       * @description 注销
       */
      function logout () {
        // 删除cookie
        util.cookies.remove('token')
        util.cookies.remove('uuid')
        // 跳转路由
        vm.$router.push({
          name: 'login'
        })
      }
      // 判断是否需要确认
      if (confirm) {
        commit('d2admin/gray/set', true, { root: true })
        vm.$confirm('注销当前账户吗?  打开的标签页和用户设置将会被保存。', '确认操作', {
          confirmButtonText: '确定注销',
          cancelButtonText: '放弃',
          type: 'warning'
        })
          .then(() => {
            commit('d2admin/gray/set', false, { root: true })
            logout()
          })
          .catch(() => {
            commit('d2admin/gray/set', false, { root: true })
            vm.$message('放弃注销用户')
          })
      } else {
        logout()
      }
    },
    /**
     * @description 用户登录后从持久化数据加载一系列的设置
     * @param {Object} state vuex state
     */
    load ({ commit, dispatch }) {
      return new Promise(async resolve => {
        // DB -> store 加载用户名
        await dispatch('d2admin/user/load', null, { root: true })
        // DB -> store 加载路由菜单
        await dispatch('d2admin/menu/load', null, { root: true })
        // DB -> store 加载主题
        await dispatch('d2admin/theme/load', null, { root: true })
        // DB -> store 加载页面过渡效果设置
        await dispatch('d2admin/transition/load', null, { root: true })
        // DB -> store 持久化数据加载上次退出时的多页列表
        await dispatch('d2admin/page/openedLoad', null, { root: true })
        // DB -> store 持久化数据加载侧边栏折叠状态
        await dispatch('d2admin/menu/asideCollapseLoad', null, { root: true })
        // DB -> store 持久化数据加载全局尺寸
        await dispatch('d2admin/size/load', null, { root: true })
        // end
        resolve()
      })
    }
  }
}
