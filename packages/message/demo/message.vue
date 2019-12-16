<template>
    <div id="">
        <p class=" f30 mb20">1.message 提示框示例</p>
        <p class="mb10"><strong>大小不一的input</strong> </p>
        <s-button type="" @click="open" hollow> 默认</s-button>
        <s-button type="success" @click="open1" hollow>成功</s-button>
        <s-button type="warning" @click="open3" hollow>警告</s-button>
        <s-button type="danger" @click="open4" hollow>危险</s-button>


        <p class=" f30 mb20 mt20">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
        
    </div>
</template>

<script >
import doc from '../../../docs/message.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            
        }
    },
    methods:{
        open(){
            this.$message("这是一条默认的信息！")
        },
        open1(){
            this.$message({
                message:"这是一条成功的信息!",
                type:"success",
                duration:"5000"
            })
        },
        open3(){
            this.$message({
                message:"这是一条警告信息!",
                type:"warning"
            })
        },
        open4(){
            this.$message({
                message:"这是一条危险的信息!",
                type:"danger"
            })
        }
    }
}
</script>
<style scoped>

</style>