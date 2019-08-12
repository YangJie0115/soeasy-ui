import Component from './src/option.vue';



/* istanbul ignore next */
Component.install = function(Vue) {
  console.log("adad")
  Vue.component(Component.name, Component);
};


export default Component;