import Button from '../packages/button/index'
import Icon from '../packages/icon/index'
import Input from '../packages/input/index'
import Textarea from '../packages/textarea/index'
import Radio from '../packages/radio/index'
import Checkbox from '../packages/checkbox/index'
import Table from '../packages/table/index'
import Select from '../packages/select/index'
import Option from '../packages/select/index1'
import Cascader from '../packages/cascader/index'
import Pagination from '../packages/pagination/index'
import Sign from '../packages/sign/index'
import Message from '../packages/message/index'
import Dialog from '../packages/dialog/index'
import NavMenu from '../packages/navMenu/index'
import NavMenuGroup from '../packages/navMenu/index1'
import NavMenuTit from '../packages/navMenu/index2'
import NavMenuItem from '../packages/navMenu/index3'
import Breadcrumb from '../packages/breadcrumb/index'
import BreadcrumbItem from '../packages/breadcrumb/index1'
import Vue from 'vue'

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
  NavMenu,
  NavMenuTit,
  NavMenuGroup,
  NavMenuItem,
  Breadcrumb,
  BreadcrumbItem,
]

Vue.config.productionTip = false
// Vue.component("s-button", Button)

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



const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}
Vue.prototype.$message = Message;

// Vue.prototype.dispatch=function(componentName, eventName, params) {
//   var parent = this.$parent || this.$root;
//   var name = parent.$options.componentName;
//   //寻找父级，如果父级不是符合的组件名，则循环向上查找
//   while (parent && (!name || name !== componentName)) {
//     parent = parent.$parent;
  
//     if (parent) {
//       name = parent.$options.componentName;
//     }
//   }
//   //找到符合组件名称的父级后，触发其事件。整体流程类似jQuery的closest方法
//   if (parent) {
//     parent.$emit.apply(parent, [eventName].concat(params));
//   }
//  }
 



// install(Vue)
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default{
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
  NavMenu,
  NavMenuTit,
  NavMenuGroup,
  NavMenuItem,
  Breadcrumb,
  BreadcrumbItem,
  install
}



