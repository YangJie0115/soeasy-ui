<template>
  <div class="demo-button">
    <p class=" f30 mb20">1.按钮示例</p>
    <p class="mb10">提供了一套常用的按钮集合。</p>
    <s-sign border>标签1</s-sign>
    <s-sign  num="11" border>标签2</s-sign>
    <s-sign color="#F56C6C" num="24" border>标签3</s-sign>
    <s-sign color="#8BC1A6" num="8" border>标签444</s-sign>
    <s-sign num="2" >标签5</s-sign>
    

    <p class=" f30 mb20 mt20">2.文档示例</p>
    <div  class="markdown-body">
        <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from '../../../docs/sign.md'
export default {
    components:{
        doc
    }
}
</script>