<template>
    <div class="s-select-group" style="">
        <div class="s-select-box" @click="sSelectFocus"  :class="{'is-focus':isFocus}" v-clickOutSide="handleCloseThis">
            <input class="s-select"  type="text" readonly  v-model="model" :disabled="isDisabled" 
                :class="{'is-disabled-options':isDisabled}"
             >
            <i class="icon-down1 iconfont"></i>
        </div>
        <div class="s-select-down-box"   :class="{'is-focus':isFocus}">
                <div class="jiao"></div>
                <ul class="s-select-down" 
                >
                    <slot></slot>
                </ul>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
import clickOutSide from './clickOutSide';
export default {
    name:"sSelect",
    data(){
        return {
            isFocus:false,
            model:"",
        }
    },
    directives:{clickOutSide},
    props:{
         value:{
             type:[Number,String],
             default:""
         },
         disabled:Boolean,
    },
    computed:{
        isDisabled(){
            return this.disabled;
        },
    },
    watch: {
        value(newVal,oldVal){
            this.$children.forEach(item=>{
            if(newVal==item.value){
                item.$emit('chooseOption',newVal)
            }
        })
        }
    },
    methods:{
        sSelectFocus(){
            if(this.disabled){
                return false;
            }
            this.isFocus=true;
        },
        sSelectBlur(){
            setTimeout(()=>{
                this.handleCloseThis()
                this.isFocus=false;
            },100)
        },
        handleCloseThis(){
            this.isFocus=false;
        },
        handleOptionSelect(option, byClick) {
             this.model=option[0];
             this.$emit("input",option[1]);
             this.$emit("change",option[1]);
            //  触发子组件选中
            this.$children.forEach(item=>{
                item.$emit('removeClass',option[1])
                if(option[1]==item.value){
                    item.$emit('chooseOption',option[1])
                }
            })
            
        },
        
    },
    mounted(){
        this.$on('handleOptionClick', this.handleOptionSelect);
        this.$children.forEach(item=>{
            if(this.value==item.value){
                item.$emit('chooseOption',this.value)
            }
        })
    }
}
</script>

<style scoped>
.s-select-group{
    position: relative;margin:10px 0;
    display: inline-block
}
.s-select-box{
    display: inline-block;
    width: 250px;
    position: relative;
}
.icon-down1{
    position: absolute;
    right:10px;
    top: 13px;
    color:#c0c4cc;
    transition: transform .3s;
    transform: rotate(0deg);
    cursor: pointer;
}
.s-select{
    width: 100%;
    line-height: 40px;
    height: 40px;
    box-sizing: border-box;
    padding-left:10px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    cursor: pointer;
    padding-right:26px;
}
.s-select:hover{
    border-color: #c0c4cc;
}
.s-select:focus{
    border-color: #409EFF;
}

.is-disabled-options{
    background: #F5F7FA;
    cursor:not-allowed
}
.is-disabled-options:hover{
    border: 1px solid #dcdfe6;
}
.is-disabled-options:hover{
    border: 1px solid #dcdfe6;
}

.s-select-down-box{
        z-index: 100;
    -moz-transition: height .2s; /* Firefox 4 */
    -webkit-transition: height .2s; /* Safari 和 Chrome */
    -o-transition: height .2s; /* Opera */
    transition: height .2s; /* Opera */
    position: absolute;
    top: 36px;
    left: 0px;
    height: 0;
    min-width: 250px;
    overflow: hidden;
    box-sizing: border-box;
}
.s-select-down{
    list-style: none;
    padding: 6px 0px;
    line-height: 30px;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    margin: 5px 0;
    width: 100%;
    max-height:200px;
    box-shadow: 0 1px 14px 0 rgba(0,0,0,.1);
    overflow-y: auto;
    
   
}
.is-focus.s-select-down-box{
    height: 220px
}



.jiao{
    width:8px;
    height: 8px;
    position: relative;
    top:10px;
    left: 70px;
    background: #fff;
    border-left:1px solid #E4E7ED;
    border-top:1px solid #E4E7ED;
    transform:rotate(45deg);
    -ms-transform:rotate(45deg); 	/* IE 9 */
    -moz-transform:rotate(45deg); 	/* Firefox */
    -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
    -o-transform:rotate(45deg); 	/* Opera */
    z-index: 102;
}
.is-focus .icon-down1{
    transform: rotate(180deg);
}
    
</style>
