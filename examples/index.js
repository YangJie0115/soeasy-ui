// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Button from '../packages/button'
import Icon from '../packages/icon'
import Input from '../packages/input'
import Textarea from '../packages/textarea'
import Radio from '../packages/radio'
import Checkbox from '../packages/checkbox'
import Table from '../packages/table/index'
import Select from '../packages/select/index'
import Option from '../packages/select/index1'
import Cascader from '../packages/cascader'
import Pagination from '../packages/pagination'
import Sign from '../packages/sign'
import Message from '../packages/message'
import Dialog from '../packages/dialog'
import  "./assets/css/index.css"
import  "./icon.css"
import 'github-markdown-css';


Vue.config.productionTip = false
// Vue.component("s-button", Button)

const components = [
  Button,
  Icon,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Table,
  Select,
  Option,
  Cascader,
  Pagination,
  Sign,
  Dialog,
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}
Vue.prototype.$message = Message;

Vue.prototype.dispatch=function(componentName, eventName, params) {
  
  var parent = this.$parent || this.$root;
  var name = parent.$options.componentName;
  //寻找父级，如果父级不是符合的组件名，则循环向上查找
  while (parent && (!name || name !== componentName)) {
    parent = parent.$parent;
  
    if (parent) {
      name = parent.$options.componentName;
    }
  }
  //找到符合组件名称的父级后，触发其事件。整体流程类似jQuery的closest方法
  if (parent) {
    parent.$emit.apply(parent, [eventName].concat(params));
  }
 }
 



install(Vue)
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export {
  Button,
  Icon,
  Input,
  Textarea,
  Radio,
  Checkbox,
  Table,
  Select,
  Option,
  Cascader,
  Pagination,
  Sign,
  Dialog,
}

export default {
  install
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
