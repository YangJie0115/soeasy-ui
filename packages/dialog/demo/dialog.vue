<template>
   
    <div id="">
        <p class=" f30 mb20">1.输入框示例</p>
        <p class="mb10"><strong>大小不一的input</strong> </p>
        <s-button type="primary" @click="dialogTableVisible=true">这是一个dialog</s-button>
        <s-dialog 
        title="这是一个dialog"
        width="800"
        :sVisible.sync="dialogTableVisible"
        >
        <div slot="sMain">
            111
        </div>
        <div slot="sFoot">
            <s-button type="primary" @click="dialogTableVisible=false">确定</s-button>
            <s-button  @click="dialogTableVisible=false">取消</s-button>
        </div>
        </s-dialog>


        <p class=" f30 mb20 mt20">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
    </div>

</template>

<script >
import doc from '../../../docs/dialog.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            dialogTableVisible:false
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>