<template>
  <div id="app">
    <ccc></ccc>
    <bbb></bbb>
  </div>
</template>

<script>
import sb from '../docs/button.md'
import bbb from '../packages/button/demo/button'
import ccc from '../packages/icon/demo/icon'

export default {
  name: 'App',
  components: {
    sb,bbb,ccc
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
