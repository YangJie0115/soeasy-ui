<template>
    <div id="icon">
        <p class=" f30 mb20">1.输入框示例</p>
        <p class="mb10"><strong>大小不一的input</strong> </p>
        <s-input type="text"   width="100" height="30" placeholder="请输入111" v-model="value">输入框</s-input>
        <s-input type="number"   width="200" height="40" placeholder="请输入111">输入框</s-input>
        <s-input type="password"   width="300" height="30" placeholder="请输入111">输入框</s-input>
        <p class="mb10 mt10"><strong>禁用 可读 </strong></p>
        <s-input type="text"   disabled>disabled禁用</s-input>
        <s-input type="text"   readonly>readonly可读</s-input>
        <p class="mb10 mt10"><strong>带图标的input</strong> </p>
        <s-input type="text"   iconlt="icon-chazhao">图标左</s-input>
        <s-input type="text" iconrt="icon-chazhao">图标右</s-input>
        <p class="mb10 mt10"><strong>长度</strong> </p>
        <s-input type="text" v-model="value"  width="250" height="30" placeholder="限制长度" maxlength="3">输入框</s-input>
        <p class=" f30 mb20 mt20">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
        
    </div>
</template>

<script >
import doc from '../../../docs/input.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            value:"",
            value1:"",
            value2:"",
            value3:"",
            value4:"",
        }
    }
}
</script>
<style scoped>
.iconList{
    border-top:1px solid  #eeeeee;
    border-left:1px solid  #eeeeee;
    overflow: hidden;
}
.iconList div{
    padding-top:20px;
    width:151px;
    height:120px;
    text-align:center;
     border-right:1px solid  #eeeeee;
    border-bottom:1px solid  #eeeeee;
    cursor: pointer;
}
.iconList div:hover{
    color:#008dff
}
</style>