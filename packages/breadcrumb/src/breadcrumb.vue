<template>
    <ul class="s-breadcrumb">
        <slot></slot>
    </ul>
</template>


<script>
export default {
    name:"sBreadcrumb",
    data(){
        return {
            
        }
    },
    props:{
        icon:{
            type:String,
            default:""
        }
    },
    methods:{
        
    },
    watch:{
      
    },
    created(){
    },
    computed:{
       
    },
}
</script>
<style scoped>
.s-breadcrumb{
    display: flex
}
    
</style>