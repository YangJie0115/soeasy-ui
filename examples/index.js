// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Button from '../packages/button'
import Icon from '../packages/icon'
import  "./assets/css/index.css"
import  "./icon.css"
import 'github-markdown-css';

Vue.config.productionTip = false
// Vue.component("s-button", Button)

const components = [
  Button,
  Icon,
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}




install(Vue)
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export {
  Button,Icon
}

export default {
  install
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
