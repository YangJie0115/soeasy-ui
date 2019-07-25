<template>
    <i :class="icon" class="iconfont"></i>
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
    computed:{
        
    },
}
</script>
