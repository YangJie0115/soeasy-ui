<template>
    <div id="icon">
        <p class=" f30 mb20">1.textarea示例</p>
        <p class="mb10"><strong>普通样式</strong> </p>
        <s-textarea rows="10" cols="100" count  v-model="value" maxlength="30"></s-textarea>
        <s-textarea class="lt  mr10" rows="2"  maxlength="10"  placeholder="限制长度为10"></s-textarea>
        <s-textarea class="lt mr10" rows="2" disabled  placeholder="禁用"></s-textarea>
        <s-textarea class="lt" rows="2" readonly placeholder="只读"></s-textarea>


        
        <p class=" f30 mb20 mt20 clr">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
        
    </div>
</template>

<script >
import doc from '../../../docs/textarea.md'
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