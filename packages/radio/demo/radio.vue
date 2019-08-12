<template>
    <div id="icon">
        <p class=" f30 mb20">1.radio示例</p>
        <p class="mb10"><strong>普通样式</strong> </p>
        <s-radio-group :sRadioGroup="sRadioGroup" v-model="radio"  name="a"></s-radio-group>
        <s-radio-group :sRadioGroup="sRadioGroup1" v-model="radio1" @change="handlclick"  name="a1"></s-radio-group>

        
        <p class=" f30 mb20 mt20 clr">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
        
    </div>
</template>

<script >
import doc from '../../../docs/radio.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            radio:2,
            radio1:2,
            sRadioGroup:[
                {label:'选项1',value:1},
                {label:'选项2',value:2},
                {label:'选项选项3',value:3},
            ],
            sRadioGroup1:[
                {label:'选项1',value:1,disabled:"true"},
                {label:'选项2',value:2,disabled:"true"},
                {label:'选项选项3',value:3,disabled:"true"},
            ]
        }
    },
    methods:{
        handlclick(val){
            console.log(val)
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