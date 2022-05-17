import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import enLang from 'element-ui/lib/locale/lang/en'

import Cookies from 'js-cookie'

/**
 * normalize.css 简介
 * https://blog.csdn.net/qq_42356513/article/details/122831729
 * 
 * 安装方式： yarn add normalize.css
 *  */ 
import 'normalize.css/normalize.css' // a modern alternative to CSS resets


// import '@/styles/index.scss'

// import App from './App'
// import store from './store'
// import router from './router'

// import './icons' // icon
// import './permission' // permission control
// import './utils/error-log' // error log

// import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
 if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI, {
  // 动态指定ElementUI的大小
  size: Cookies.get('size') || 'medium', // set element-ui default size
  locale: enLang // 如果使用中文，无需设置，请删除
});

// // register global utility filters
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.config.productionTip = false

new Vue({
  router,
  // 将创建的共享数据对象，挂载到Vue实例中
  // 所有的组件，就可以直接从 store 中获取全局的数据了
  store,
  render: h => h(App)
}).$mount('#app')
