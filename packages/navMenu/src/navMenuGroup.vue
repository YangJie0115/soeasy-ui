<template>
        <div class="s-nav-menu-group"  :class="{isGroupShow:isGroupShow,twoItem:isTwoItem}"  :style="{'max-height':isGroupShow?'210px':'0'}">
            <div class="s-nav-top"></div>
            <ul class="s-nav-menu-group-Box">
                <slot></slot>
            </ul>
            <div class="s-nav-bottom"></div>
        </div>
</template>

<script>
export default {
    name:"sNavMenuGroup",
    props:{
        twoItem:Boolean
    },
    data(){
        return {
            type:"info",
            top:60,
            isGroupShow:false
        }
    },
    methods:{
        
    },
    computed:{
        isTwoItem(){
            return this.twoItem
        }
    },
    created(){
        console.log(this.isGroupShow)
    },
}
</script>

<style scoped>
.s-nav-menu-group{
    position: absolute;
    top:52px;
    left: 0;
    line-height: 40px;
    width: 320px;
    transition: transform .3;
    max-height: 0;
    transition: max-height 0.1s ease-out;
    overflow: hidden;
    z-index: 1000;
}
.s-nav-menu-group-Box{
    overflow-y: auto;
    width:160px;
    max-height: 200px;
    background: #545C64;
}
.isGroupShow{
    transition: max-height 0.15s ease-in;
}
.s-nav-top{
    height: 5px;
    width: 160px;
    border-radius: 4px 4px 0 0;
    background: #545C64;
}
.s-nav-bottom{
    height: 5px;
    width: 160px;
    border-radius:0 0 4px 4px ;
    background: #545C64;
}
.twoItem{
    top:0px;
    left: 155px;
    transition: max-height 0s ease-in;
}
</style>