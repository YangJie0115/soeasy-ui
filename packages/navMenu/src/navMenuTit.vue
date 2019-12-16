<template>
        <li class="s-nav-menu-tit" 
        @mouseover="mouseoverEvent"
         @mouseleave="mouseleaveEvent" 
         @click="clickItem" 
         :class="{'is-Hover':isHover,active:curPath==toPath}">
            <s-icon :icon="icon" v-if="iconType=='left'"></s-icon>
            <slot></slot>
            <span class="ssss"  v-if="iconType!='left'"></span>
            <s-icon :icon="icon" v-if="iconType=='right'"></s-icon>
            <span class="s-icon-down rt" v-if="iconType=='down'">
                <s-icon :icon="icon" ></s-icon>
            </span>
        </li>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers';
export default {
    name:"sNavMenuTit",
    props:{
        icon:{
            type:String,
            default:""
        },
        iconType:{
            type:String,
            default:"left"
        },
        to:{
            type:String,
            default:""
        }
        
    },
    data(){
        return {
            type:"info",
            top:60,
            isHover:false,
            curPath:null,
            toPath:"",
            timer:null
        }
    },
    watch:{
        curPath(val,old){
            // console.log(val)
        }
    },
    methods:{
        mouseoverEvent(){
            clearTimeout(this.timer)
            this.isHover=true;
            this.$children.forEach(item=>{
                item.isGroupShow=true;
            })
            // this.$children.isGroupShow=true;
            // console.log(this.$children.isGroupShow)
        },
        mouseleaveEvent(){
            this.isHover=false;
             this.timer=setTimeout(()=>{
                 this.$children.forEach(item=>{
                    item.isGroupShow=false;
                })
                
             },100)
        },
        clickItem(){
            this.$router.push(this.to)
        }
    },
    created(){
        this.toPath=this.to;
    },
}
</script>

<style scoped>
.s-nav-menu-tit{
    padding:0 20px;
    cursor: pointer;
    position: relative;
}
.s-nav-menu-tit:hover{
    background: #434A50
}
.s-icon-down{
    display: inline-block;
    transition: transform .3s;
    transform:rotate(0deg);
}
.ssss{
    width: 10px;
    display: inline-block;
}
.is-Hover .s-icon-down{
    transform: rotate(180deg)
}
.active{
    color: #ffc879;
    border-bottom:2px solid #ffc879
}
</style>