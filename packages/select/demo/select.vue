<template>
    <div id="icon">
        <p class=" f30 mb20">1.checked示例</p>
        <p class="mb10"><strong>普通样式</strong> </p>
        <s-select v-model="value" @change="changeOption">
            <s-option value="11" label="按时打算"></s-option>
            <s-option value="22"  label="2"></s-option>
            <s-option value="33" label="3" ></s-option>
            <s-option value="44" label="4"></s-option>
            <s-option value="55" label="5"></s-option>
            <s-option value="66" label="6"></s-option>
            <s-option value="00" label="0"></s-option>
        </s-select>
        <s-select v-model="value1" >
            <s-option value="11" label="按时打算"></s-option>
            <s-option value="22"  label="2"></s-option>
            <s-option value="33" label="3" disabled></s-option>
            <s-option value="44" label="4"></s-option>
            <s-option value="55" label="5"></s-option>
            <s-option value="66" label="6"></s-option>
            <s-option value="00" label="0"></s-option>
        </s-select>
        <s-select v-model="value2" disabled>
            <s-option value="11" label="按时打算"></s-option>
            <s-option value="22"  label="2"></s-option>
            <s-option value="33" label="3" ></s-option>
            <s-option value="44" label="4"></s-option>
            <s-option value="55" label="5"></s-option>
            <s-option value="66" label="6"></s-option>
            <s-option value="00" label="0"></s-option>
        </s-select>

        
        <p class=" f30 mb20 mt20 clr">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
        
    </div>
</template>

<script >
import doc from '../../../docs/select.md'
export default { 
    components:{
        doc
    },
    data(){
        return {
            value:"22",
            value1:"22",
            value2:"22",
        }
    },
    methods:{
        handlclick(val){
            console.log(val)
        },
        changeOption(val){
            console.log(val)
        }
    }
}
</script>
<style scoped>

</style>