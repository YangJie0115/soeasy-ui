<template>
    <i :class="icon" class="iconfont" @click="handClick"></i>
</template>

<script>
export default {
    name:"sIcon",
    props:{
        icon:{
            type:String,
            default:""
        }
    },
    methods:{
        handClick(){
            this.$emit('click','')
        }
    },
    computed:{
        
    },
}
</script>
