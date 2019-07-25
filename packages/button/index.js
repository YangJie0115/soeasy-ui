// import Component from './src'

// Component.install = function(Vue) {
//     console.log("sasda")
//   Vue.component(Component.name, Component)
// }

// export default Component

import Component from './src/button.vue';



/* istanbul ignore next */
Component.install = function(Vue) {
    console.log(Component.name)
  Vue.component(Component.name, Component);
};

export default Component;