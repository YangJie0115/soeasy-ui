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
          <li class="f14" :class="{isActive:curPath=='icon'}" @click="chooseLeft('icon')">icon 图标</li>
          <li class="f14" :class="{isActive:curPath=='button'}" @click="chooseLeft('button')">button 按钮</li>
          <li class="f14" :class="{isActive:curPath=='input'}" @click="chooseLeft('input')">input 输入框</li>
          <li class="f14" :class="{isActive:curPath=='textarea'}" @click="chooseLeft('textarea')">textarea 输入框</li>
          <li class="f14" :class="{isActive:curPath=='radio'}" @click="chooseLeft('radio')">radio 单选框</li>
          <li class="f14" :class="{isActive:curPath=='Checkbox'}" @click="chooseLeft('checkbox')">Checkbox 多选框</li>
          <li class="f14" :class="{isActive:curPath=='select'}" @click="chooseLeft('select')">Select 选择器</li>
          <li class="f14" :class="{isActive:curPath=='cascader'}" @click="chooseLeft('cascader')">Cascader 级联选择器</li>
          <li class="f14" :class="{isActive:curPath=='DatePicker'}" @click="chooseLeft('datePicker')">DatePicker 时间选择器</li>
           <li class=" f20 s-tit">常用组件</li>
          <li class="f14" :class="{isActive:curPath=='table'}" @click="chooseLeft('table')">Table 表格</li>
          <li class="f14" :class="{isActive:curPath=='pagination'}" @click="chooseLeft('Pagination')">Pagination 分页</li>
          <li class="f14" :class="{isActive:curPath=='Badge'}" @click="chooseLeft('Badge')">Badge 标记</li>
          <li class="f14" :class="{isActive:curPath=='Message'}" @click="chooseLeft('Message')">Message 消息提示</li>
          <li class="f14" :class="{isActive:curPath=='MessageBox'}" @click="chooseLeft('MessageBox')">MessageBox 弹框</li>
          <li class="f14" :class="{isActive:curPath=='NavMenu'}" @click="chooseLeft('NavMenu')">NavMenu 导航菜单</li>
          <li class="f14" :class="{isActive:curPath=='Breadcrumb'}" @click="chooseLeft('Breadcrumb')">Breadcrumb 面包屑</li>
          <li class="f14" :class="{isActive:curPath=='Dropdown'}" @click="chooseLeft('Dropdown')">Dropdown 下拉菜单</li>
          <li class="f14" :class="{isActive:curPath=='Carousel'}" @click="chooseLeft('Carousel')">Carousel 走马灯</li>
          <li class="f14" :class="{isActive:curPath=='Collapse'}" @click="chooseLeft('Collapse')">Collapse 折叠面板</li>
          <li class="f14" :class="{isActive:curPath=='Upload'}" @click="chooseLeft('Upload')">Upload 上传</li>
      </ul>

      
      
    </div>
</template>
<script>
export default {
  data(){
    return{
      curPath:"icon",
    }
  },
  components: {
    
  },
  methods:{
    chooseLeft(n){
      this.curPath=n;
      let str="/"+n;
      this.$router.push(str)
    }
  },
  created(){
    let path=this.$route.path.split("/")[1]
    this.curPath=path;
  },
  watch:{
    $route(to,from){
       let path=this.$route.path.split("/")[1]
      let path1=from.path.split("/")[0];
      this.curPath=path;
    }
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
#s-leftAside .isActive{
  color:#008DFF
}
#s-leftAside .s-tit:hover{
  color:inherit
}
#s-leftAside .s-tit{
  color:#6A797E;font-size:300;text-shadow: 0 0 0.5px #6A797E;padding:10px 0
}

</style>
