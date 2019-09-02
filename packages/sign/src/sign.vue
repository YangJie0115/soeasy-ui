<template>
    <div class="s-sign f12 mr20" :class="{'s-sign-border':border}" @click="handleClick(num)">
        <slot></slot>
        <span class="s-sign-yuan f12" :style="{'background':color}" v-if="num!=''">{{num}}</span>
    </div>
</template>

<script>
export default {
    name:"sSign",
    props:{
        num: {
            type: [String,Number],
            default: ''
        },
        color: {
            type: String,
            default:''
        },
        border:Boolean,
    },
    computed:{
        
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
    
}
</script>
<style scoped>
.s-sign{
    position: relative;
    display: inline-block;
    padding:0 10px;
    line-height: 30px;
    text-align: center;
    min-width: 50px;
    color: #606266;
    cursor: pointer;
    border-radius: 4px;
}
.s-sign:hover{
    color: #409eff;
}
.s-sign-border{
    border: 1px solid #dcdfe6;
}
.s-sign-border:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.s-sign-yuan{
    position: absolute;
    background: #008DFF;
    color:#fff;
    min-width: 20px;
    min-height: 20px;
    border-radius: 100px;
    left:calc(100% - 10px);
    top: -10px;
    line-height: 19px;
    padding:0 4px;
}
</style>
