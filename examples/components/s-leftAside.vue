<template>
    <div id="s-leftAside">
      <ul>
          <li class=" f20 s-tit">开发指南</li>
          <li class="f14">简单说明</li>
          <li class="f14">更新日志</li>
          <li class="f14">快速上手</li>
      </ul>

      <ul>
          <li class=" f20 s-tit">基本组件</li>
          <li class="f14">icon 图标</li>
          <li class="f14">button 按钮</li>
          <li class="f14">input 输入框</li>
          <li class="f14">radio 单选框</li>
          <li class="f14">Checkbox 多选框</li>
          <li class="f14">Select 选择器</li>
          <li class="f14">Cascader 级联选择器</li>
          <li class="f14">TimePicker 时间选择器</li>
          <li class="f14">DatePicker 日期选择器</li>
          <li class="f14">DateTimePicker 日期时间选择器</li>
          <li class="f14">Rate 评分</li>
          <li class="f14">TTable 表格</li>
          <li class="f14">Tag 标签</li>
          <li class="f14">Pagination 分页</li>
          <li class="f14">Badge 标记</li>
          <li class="f14">Message 消息提示</li>
          <li class="f14">MessageBox 弹框</li>
          <li class="f14">NavMenu 导航菜单</li>
          <li class="f14">Breadcrumb 面包屑</li>
          <li class="f14">Dropdown 下拉菜单</li>
          <li class="f14">Carousel 走马灯</li>
          <li class="f14">Collapse 折叠面板</li>
          <li class="f14">Upload 上传</li>
      </ul>

      
      
    </div>
</template>
<script>
export default {
  components: {
    
  }
}
</script>
<style scoped>
#s-leftAside{
  color:#455a64;
  position: fixed;
  top: 70px;
  bottom:0;
  width:200px;
  padding-top:20px;
  border-right: 1px solid #f1f4f8;
  height: calc(100% - 70px);
  overflow-y: auto;
  z-index: 99;
}
#s-leftAside li{
  line-height: 40px;
  cursor: pointer;
  /* margin:10px 0 */
  text-align: left
}
#s-leftAside li:hover{
  color:#008DFF
}
#s-leftAside .s-tit:hover{
  color:inherit
}
#s-leftAside .s-tit{
  color:#6A797E;font-size:300;text-shadow: 0 0 0.5px #6A797E;padding:10px 0
}

</style>
