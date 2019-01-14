// 设置文件
import setting from '@/setting.js'

export default {
  namespaced: true,
  state: {
    // 顶栏菜单
    header: [],
    // 侧栏菜单
    aside: [],
    // 侧边栏收缩
    asideCollapse: setting.menu.asideCollapse
  },
  actions: {
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} state vuex state
     * @param {Boolean} collapse is collapse
     */
    asideCollapseSet ({ state, dispatch }, collapse) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = collapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 切换侧边栏展开和收缩
     * @param {Object} state vuex state
     */
    asideCollapseToggle ({ state, dispatch }) {
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = !state.asideCollapse
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          value: state.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 从持久化数据读取侧边栏展开或者收缩
     * @param {Object} state vuex state
     */
    asideCollapseLoad ({ state, dispatch }) {
      // console.log('header:' + JSON.stringify(state.header))
      return new Promise(async resolve => {
        // store 赋值
        state.asideCollapse = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'menu.asideCollapse',
          defaultValue: setting.menu.asideCollapse,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 设置侧边栏展开或者收缩
     * @param {Object} state vuex state
     * @param {Boolean} menu is menu
     */
    set ({ state, dispatch }, menu) {
      // console.log('menu set:' + JSON.stringify(menu.userMenu))
      return new Promise(async resolve => {
        // store 赋值
        state.aside = menu.userMenu
        state.header = menu.userMenu
        // 持久化
        await dispatch('d2admin/db/set', {
          dbName: 'sys',
          path: 'menu.menu',
          value: state.header,
          user: true
        }, { root: true })
        // end
        resolve()
      })
    },
    /**
     * 从持久化数据读取侧边栏展开或者收缩
     * @param {Object} state vuex state
     */
    load ({ state, dispatch, commit }) {
      return new Promise(async resolve => {
        // store 赋值
        let menu = await dispatch('d2admin/db/get', {
          dbName: 'sys',
          path: 'menu.menu',
          defaultValue: [],
          user: true
        }, { root: true })
        // 设置顶栏菜单
        commit('headerSet', menu)
        // 设置侧栏菜单
        commit('asideSet', menu)
        // end
        resolve()
      })
    },
    /**
     * 异步加载顶端菜单
     * @param {Object} state vuex state
     */
    headerSet ({ commit }, { menuHeader }) {
      // console.log(JSON.stringify(menuHeader))
      return new Promise(async resolve => {
        // 设置顶栏菜单
        commit('headerSet', menuHeader)
        // end
        resolve()
      })
    },
    /**
     * 异步加载顶端菜单
     * @param {Object} state vuex state
     */
    asideSet ({ commit }, { menuAside }) {
      return new Promise(async resolve => {
        // 设置侧栏菜单
        commit('asideSet', menuAside)
        // end
        resolve()
      })
    }
  },
  mutations: {
    /**
     * @description 设置顶栏菜单
     * @param {Object} state vuex state
     * @param {Array} menu menu setting
     */
    headerSet (state, menu) {
      // store 赋值
      state.header = menu
    },
    /**
     * @description 设置侧边栏菜单
     * @param {Object} state vuex state
     * @param {Array} menu menu setting
     */
    asideSet (state, menu) {
      // store 赋值
      state.aside = menu
    }
  }
}
