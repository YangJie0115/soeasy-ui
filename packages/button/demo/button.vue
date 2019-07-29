<template>
  <div class="demo-button">
    <p class=" f30 mb20">1.图标库示例</p>
    <p class="mb10">提供了一套常用的图标集合。</p>
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
    <s-button   icon="icon-RectangleCopy" left fillet></s-button>
    <s-button type="primary" icon="icon-check" left fillet></s-button>
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
    <s-button icon="icon-RectangleCopy" left>默认按钮</s-button>
    <s-button type="primary" icon="icon-check" left>主要按钮</s-button>
    <s-button type="success"   icon="icon-icon_chexiao" left>成功按钮</s-button>
    <s-button type="info"  icon="icon-xiayibu" >信息按钮</s-button>
    <s-button type="warning"  icon="icon-icon_yulan" >警告按钮</s-button>
    <s-button type="danger"  icon="icon-check" >危险按钮</s-button>
    <s-button  :color="['#fff','#FF5F5F']"  icon="icon-icon_tianjia" >自定义颜色</s-button>
    <s-button  :color="['#fff','#7979FF','#7979FF']"  icon="icon-check" >自定义颜色</s-button>
    

    <p class=" f30 mb20 mt20">2.文档示例</p>
    <div  class="markdown-body">
        <doc></doc>
    </div>
  </div>
</template>

<script>
import doc from '../../../docs/button.md'
export default {
    components:{
        doc
    }
}
</script>