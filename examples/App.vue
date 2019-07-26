<template>
  <div id="app">
    <s-headers></s-headers>
    <div class="s-mains">
      <s-leftAside></s-leftAside>
      <div id="someComponents">
        <!-- <aaa></aaa> -->
        <div class="markdown-body" ><aaa></aaa></div>
        <ccc></ccc>
        <bbb></bbb>
      </div>
    </div>
  </div>
</template>

<script>
import sHeaders from './components/s-headers'
import sLeftAside from './components/s-leftAside'
import aaa from '../docs/button.md'
import bbb from '../packages/button/demo/button'
import ccc from '../packages/icon/demo/icon'

export default {
  name: 'App',
  components: {
    sHeaders,bbb,ccc,sLeftAside,aaa
  },
  data(){
    return{
      markdownOption: {
        bold: true, // 粗体
      },
      // msc:aaa
    }
  },
  
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  overflow-y:auto;
}
#someComponents{
  /* position: absolute; */
  /* right:0; */
  /* top:70px; */
  width: 100%;
  padding-top:100px;
  padding-left:240px;
  /* height: calc(100% - 70px); */
  /* overflow-y: auto; */
  text-align: left
}
</style>
