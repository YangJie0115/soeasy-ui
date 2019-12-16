<template>
        <li class="s-nav-menu-item" :class="{active:toPath==curPath}" 
        @mouseover="mouseoverEvent"
         @mouseleave="mouseleaveEvent"
         @click="handClick">
            <slot></slot>
            <span class="rt">
                <s-icon :icon="icon"></s-icon>
            </span>
        </li>
</template>

<script>
export default {
    name:"sNavMenuItem",
    props:{
        to:{
            type:String,
            default:""
        },
        icon:{
            type:String,
            default:""
        }
    },
    data(){
        return {
            type:"info",
            top:60,
            curPath:null,
            toPath:"",
        }
    },
    watch:{
        curPath(val,old){
            if(this.curPath==this.toPath){
                this.$parent.$parent.curPath=''
                console.log(this.$parent.$parent.curPath,this.$parent.$parent.toPath)
            }
        }
    },
    methods:{
        mouseoverEvent(){
            clearTimeout(this.timer)
            this.$children.forEach(item=>{
                item.isGroupShow=true;
            })
        },
        mouseleaveEvent(){
             this.timer=setTimeout(()=>{
                 this.$children.forEach(item=>{
                    item.isGroupShow=false;
                })
                
             },200)
        },
        handClick(){
            let arr=document.getElementsByClassName('s-nav-menu-group')
            for(let i in arr){
                arr[i].style.maxHeight=0
            }
            this.$router.push(this.to);
        }
    },
    created(){
        this.toPath=this.to;
       
    },
}
</script>

<style scoped>
.s-nav-menu-item{
    padding:0 0px 0 20px;
    color:#fff
}
.s-nav-menu-item:hover{
    background:#434A50;
}
.active{
    color:#ffc879
}
</style>