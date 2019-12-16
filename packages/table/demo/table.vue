<template>
    <div id="icon">
        <p class=" f30 mb20">1.table示例</p>
        <p class="mb10"><strong>表格1普通样式</strong> </p>
        <s-table :list="list" :tHead="tHead" ></s-table>
        <p class="mb10"><strong>表格2有Border  有操作</strong> </p>
        <s-table :list="list" :tHead="tHead1" border>
            <td v-if="tHead1[tHead1.length-1].name==''" :style="{width:tHead1[tHead1.length-1].width}">
                <a style="color:#409eff">删除</a>
            </td>
        </s-table>
        <p class="mb10"><strong>表格3固定头部 有操作  可居中 居左 居右</strong> </p>
        <div  id="fixeds">
            <s-table id="fixeds" :list="list" :tHead="tHead1" border fixed height="150px">
                <td v-if="tHead1[tHead1.length-1].name==''" :style="{width:tHead1[tHead1.length-1].width}">
                    <a style="color:#409eff">详情</a>
                </td>
            </s-table>
        </div>

        
        <p class=" f30 mb20 mt20 clr">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
    </div>
</template>

<script >
import doc from '../../../docs/table.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            list:[
                {name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了1"},
                {name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},
                {name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},
                {name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},
                {name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空2"},
            ],
            tHead:[
                {key:"序号",name:"#",width:"50px"},
                {key:"名字",name:"name",width:"150px"},
                {key:"年龄",name:"age",width:"100px"},
                {key:"性别",name:"sex",width:"80px"},
                {key:"地址",name:"adress"},
            ],
            tHead1:[
                {key:"名字",name:"name",width:"150px"},
                {key:"年龄",name:"age",width:"100px"},
                {key:"性别",name:"sex",width:"80px",textAlign:"center"},
                {key:"地址",name:"adress"},
                {key:"操作",name:"",width:"100px"},
            ]
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