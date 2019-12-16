// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import page from '../packages/index'
import  "./assets/css/index.css"
import  "./icon.css"
import 'github-markdown-css';


 Vue.use(page)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
