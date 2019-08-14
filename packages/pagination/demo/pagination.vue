<template>
    <div id="icon">
        <p class=" f30 mb20">1.分页示例</p>
        <p class="mb10">返回的值 {{num}}</p>
        <s-pagination
            :total="103"
            :size="20"
            :currentPage="1"
            :category="[10,20,30,5]"
            @handlePage="handlePage"
        ></s-pagination>
        <p style="height:40px;widht:100%"></p>

        <p class=" f30 mb20 mt20 clr">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>

    </div>
</template>

<script >
import doc from '../../../docs/pagination.md'
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