import Component from './src/select.vue';



/* istanbul ignore next */
Component.install = function(Vue) {
  console.log("adad")
  Vue.component(Component.name, Component);
};


export default Component;