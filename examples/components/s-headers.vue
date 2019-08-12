<template>
    <div id="s-headers">
        <div class="cont">
            <h2 class="lt f30">SOEASY-UI</h2>
            <div class="rt f20">SOEASY</div>
        </div>
    </div>
</template>
<script>
export default {
  components: {
    
  }
}
</script>
<style scoped>
#s-headers{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-bottom: 1px solid #cccccc;
  background: #fff;
  overflow: hidden;
  z-index: 100;
}
#s-headers .cont{
  width: 1300px;
  margin:0 auto;
  background: #fff;
  overflow: hidden;
}
#s-headers .cont h2{
  margin-top:14px
}
</style>
