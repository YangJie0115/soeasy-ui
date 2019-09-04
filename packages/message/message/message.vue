<template>
    <transition name="fade">
        <div class="s-message"
        :class="{'info':type=='info','success':type=='success','warning':type=='warning','danger':type=='danger'}"
         v-show="show"
         :style="{top:top+'px'}">  
            <s-icon icon="icon-tishi" v-if="type=='info'"></s-icon>
            <s-icon icon="icon-chenggong" v-if="type=='success'"></s-icon>
            <s-icon icon="icon-cs-jg-1" v-if="type=='warning'"></s-icon>
            <s-icon icon="icon-cuowu" v-if="type=='danger'"></s-icon>
            <span class="s-message-info">{{message}}</span>
        </div>
    </transition>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return {
            type:"info",
            top:60
        }
    },
    created(){
        console.log(this.type)
        let arr=document.getElementsByClassName('s-message');
        this.top=20+this.top*(arr.length)
    },
}
</script>

<style scoped>
.s-message{
    width:350px;
    background: red;
    position: fixed;
    left: 50%;
    line-height: 30px;
    margin-left:-175px;
    z-index: 10000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 10px;
    border-radius: 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #EBEEF5;
    position: fixed;
    background-color: #FFF;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    -webkit-transition: opacity .3s,left .3s,right .3s,top .4s,bottom .3s,-webkit-transform .3s;
    transition: opacity .3s,left .3s,right .3s,top .4s,bottom .3s,-webkit-transform .3s;
    transition: opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;
    transition: opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s,-webkit-transform .3s;
    overflow: hidden;
    color: #606266;
}
.s-message-info{
    margin-left:10px;
}
.fade-enter-active,.fade-leave-active {
    transition: opacity .3s
}
  
     
  .fade-enter,.fade-leave-to{
      opacity: 0
  }
.s-message .iconfont{
    font-size: 24px;
    
}
.info .iconfont{
    color:#9093B0
}
.success .iconfont{
    color:#85CE61
}
.warning .iconfont{
    color:#F7B752
}
.danger .iconfont{
    color:#F56C6C
}
</style>