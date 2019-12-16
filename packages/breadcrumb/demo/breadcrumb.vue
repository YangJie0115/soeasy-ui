<template>
    <div id="icon">
        <p class=" f30 mb20">1.面包屑示例</p>
        <s-breadcrumb icon="icon-more">
            <s-breadcrumb-item to="/index">首页</s-breadcrumb-item>
            <s-breadcrumb-item to="/icon">icon页面</s-breadcrumb-item>
            <s-breadcrumb-item to="/button页面">button页面</s-breadcrumb-item>
            <s-breadcrumb-item>breadcrumd页面</s-breadcrumb-item>
        </s-breadcrumb>
        <p style="height:10px;widht:100%"></p>
        <s-breadcrumb icon="icon-arrowright">
            <s-breadcrumb-item to="/index">首页</s-breadcrumb-item>
            <s-breadcrumb-item to="/icon">icon页面</s-breadcrumb-item>
            <s-breadcrumb-item to="/button页面">button页面</s-breadcrumb-item>
            <s-breadcrumb-item>breadcrumd页面</s-breadcrumb-item>
        </s-breadcrumb>
        <p style="height:10px;widht:100%"></p>

        <p class=" f30 mb20 mt20 clr">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>

    </div>
</template>

<script >
import doc from '../../../docs/breadcrumb.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            num:""
        }
    },
    methods:{
        handlePage(num){
            this.num=num;
            console.log(num)
        }
    }
}
</script>
<style scoped>

</style>