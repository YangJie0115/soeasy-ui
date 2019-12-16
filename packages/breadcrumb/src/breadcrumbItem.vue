<template>
    <li class="s-breadcrumb-item"
    :class="{'s-to-path':to!=''}"
    @click="clickItem()"
    >
        <slot></slot>
        <s-icon :icon="icon" v-if="to!=''"></s-icon>
    </li>
</template>


<script>
export default {
    name:"sBreadcrumbItem",
    data(){
        return {
            icon:""
        }
    },
    props:{
        to:{
            type:String,
            default:"",
        },
    },
    methods:{
        clickItem(){
            if(this.to!=''){
                this.$router.push(this.to)
            }
        }
    },
    watch:{
      
    },
    created(){
         this.icon=this.$parent.icon;
    },
    computed:{
       
    },
}
</script>
<style scoped>
.s-breadcrumb-item{
    margin-right:8px;
    color: #606266;
}
.s-to-path{
    font-weight: 700;
    text-decoration: none;
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #303133;
    cursor: pointer;
}
.s-to-path:hover{
    color:#008dff
}
.s-breadcrumb-item .iconfont {
    margin-left:4px;
    font-weight: 200;
    color: #606266;
}
    
</style>