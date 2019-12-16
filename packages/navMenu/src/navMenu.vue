<template>
        <ul class="s-nav-menu" >
            <li>
                <img src="../../../examples/assets/img/github.png" alt="" style="height:30px;margin-top:10px;margin-right:20px">
            </li>
            <slot></slot>
        </ul>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    name:"sNavMenu",
    props:{
        transverse:Boolean,
        path:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            type:"info",
            top:60
        }
    },
    methods:{
        handPath(arr){
             arr.forEach(item=>{
                item.curPath=this.path;
                this.handPath(item.$children)
            })
        }
    },
    watch:{
        path(val,old){
            this.handPath(this.$children)
        }
    },
    created(){
        setTimeout(()=>{
            console.log(this.$children)
            this.handPath(this.$children)
        },100)
    },
}
</script>

<style scoped>
.s-nav-menu{
    background: #545C64;
    color:#fff;
    padding-left: 40px;
    display: flex;
    width:100%;
    height: 50px;
    line-height: 50px;
    flex-direction: row;
    
}


</style>