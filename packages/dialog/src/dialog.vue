<template>
        <div class="s-dialog-box" v-show="sVisible" @click.self="closed">
            <transition name="slide-fade">
                <div class="s-dialog" :style="{width:width+'px'}" v-show="sVisible">
                    <div class="s-dialog-header f18">
                        {{title}}
                        <span class="rt" style="margin-top:4px;cursor: pointer;"  @click="closed">
                            <s-icon icon="icon-close" ></s-icon>
                        </span>
                    </div>
                    <div class="s-dialog-main">
                        <slot  name="sMain"></slot>
                    </div>
                    <div class="s-dialog-foot" :style="{textAlign:textAlign}">
                        <slot name="sFoot"></slot>
                    </div>
                </div>
            </transition>
        </div>
</template>

<script>
export default {
    name:"sDialog",
    props:{
        width:{
            type:[String,Number],
            default:"500"
        },
         textAlign:{
            type:String,
            default:"center"
        },
         title:{
            type:String,
            default:""
        },
        sVisible:Boolean
        
    },
    data(){
        return {
            type:"info",
            top:60
        }
    },
    methods:{
        closed(){
            // console.log(this.$parent.dialogTableVisible);
            // this.sVisible=false;
            this.$emit('update:sVisible',false)
            // this.$parent.dialogTableVisible=false
        }
    },
    created(){

    },
}
</script>

<style scoped>
.s-dialog-box{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    padding:0;
    z-index: 10000;
    background-color:rgba(0,0,0,0.2)
    /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2) inset; */
}
.s-dialog{
    background: #fff;
    margin:0 auto 50px;
    margin-top:15vh;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    border-radius: 2px;
}
.s-dialog-header{
    text-align: left;
    padding: 10px 16px;
    border-bottom: 1px solid #c7c7c7;
}

.s-dialog-foot{
    border-top: 1px solid #c7c7c7;
    padding: 10px 16px;
}
.s-dialog-main{
     min-height:200px ;
    padding:10px 20px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>