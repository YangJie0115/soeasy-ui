<template>
  <div id="app">
    <!-- <sb></sb> -->
    <s-button  >默认按钮</s-button>
    <s-button type="primary" >主要按钮</s-button>
    <s-button type="success" >成功按钮</s-button>
    <s-button type="info" >信息按钮</s-button>
    <s-button type="warning" >警告按钮</s-button>
    <s-button type="danger" >危险按钮</s-button>
    <s-button  :color="['#fff','red']" >自定义颜色</s-button>
    <s-button  :color="['#fff','blue','yellow']">自定义颜色</s-button>
    <br>
    <br>
    <s-button  fillet>默认按钮</s-button>
    <s-button type="primary" fillet>主要按钮</s-button>
    <s-button type="success" fillet>成功按钮</s-button>
    <s-button type="info" fillet>信息按钮</s-button>
    <s-button type="warning" fillet>警告按钮</s-button>
    <s-button type="danger" fillet>危险按钮</s-button>
    <s-button  :color="['#fff','#FF5F5F']" fillet>自定义颜色</s-button>
    <s-button  :color="['#fff','#7979FF','#7979FF']" fillet>自定义颜色</s-button>
    <br>
    <br>
    <s-button type="primary" hollow>主要按钮</s-button>
    <s-button type="success" hollow>成功按钮</s-button>
    <s-button type="info" hollow>信息按钮</s-button>
    <s-button type="warning" hollow>警告按钮</s-button>
    <s-button type="danger" hollow>危险按钮</s-button>
    <br>
    <br>
    <s-button  disabled>默认按钮</s-button>
    <s-button type="primary" disabled>主要按钮</s-button>
    <s-button type="success" disabled>成功按钮</s-button>
    <s-button type="info" disabled>信息按钮</s-button>
    <s-button type="warning" disabled>警告按钮</s-button>
    <s-button type="danger" disabled>危险按钮</s-button>
    <s-button  :color="['#fff','#FF5F5F']" disabled>自定义颜色</s-button>
    <s-button  :color="['#fff','#7979FF','#7979FF']" disabled>自定义颜色</s-button>
    <br>
    <br>
    <i class="icon-chazhao iconfont"></i>
    <!-- <s-button  src="/img/pullDown.png">默认按钮</s-button>
    <s-button type="primary"  src="/src/assets/img/pullDown.png">主要按钮</s-button>
    <s-button type="success"  src="../src/assets/img/pullDown.png">成功按钮</s-button>
    <s-button type="info"  src="../src/assets/img/pullDown.png">信息按钮</s-button>
    <s-button type="warning"  src="../src/assets/img/pullDown.png">警告按钮</s-button>
    <s-button type="danger"  src="../src/assets/img/pullDown.png">危险按钮</s-button>
    <s-button  :color="['#fff','#FF5F5F']"  src="../src/assets/img/pullDown.png">自定义颜色</s-button>
    <s-button  :color="['#fff','#7979FF','#7979FF']"  src="../src/assets/img/pullDown.png">自定义颜色</s-button> -->
  </div>
</template>

<script>
// import sb from '../docs/button.md'

export default {
  name: 'App',
  components: {
    // sb
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
