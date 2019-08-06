<template>
    <div  class="s-radio-bigBox">
        
        <span  class="s-radio-box"
        :class="{
            'is-disabled': item.disabled,
            'is-checked': model === item.value
        }"
        v-for="item in sRadioGroup"
        @click.stop="chooseSRadio(item)"
        >
            <span  class="s-radio__inner"></span>
            <input type="radio" v-model="model" :value="curValue(item.value)"  id="s-radio" class="s-radio" :name="name" >
            <label  class="s-label" style="">{{item.label}}</label>
        </span>
        
    </div>
</template>

<script>
export default {
    name:"sRadioGroup",
    data(){
        return {
            curValue(val){
                if(this.value&&this.value!=""){
                    this.model=this.value;
                    return this.value
                }else{
                    return val
                }
            },
            model:"",
        }
    },
    props:{
        sRadioGroup:{
            type:Array,
            default:[]
        },
        disabled:Boolean,
        name:{
            type:String,
            default:""
        },
       value:{
            type:[String,Number],
            default:""
        },
    },
    computed:{
        isDisabled(){
            return this.disabled
        },
        isReadonly(){
            return this.readonly;
        }
    },
    watch: {
      
    },
    methods:{
        chooseSRadio(val){
            if(val.disabled){
                return false;
            }
            this.model=val.value;
            // event.currentTarget.children[1].checked="true";
            this.$emit('change', this.model);
            this.$emit('input', this.model);
        }
    },
    mounted(){
        console.log(this.value)
    }
}
</script>

<style scoped>
.s-radio__inner{
    border: 1px solid #dcdfe6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    top: 2px;
}
.s-radio__inner:after {
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: #fff;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top:-3px;
    margin-left:-3px;
    /* transform: translate(-50%,-50%) scale(0); */
    /* transition: transform .15s ease-in; */
}
.s-radio-box{
    cursor: pointer;
    display: inline-block
}
.s-radio-box.is-checked .s-radio__inner {
    border-color: #008DFF;
    background: #008DFF;
}
.s-radio-box.is-checked .s-label{
    color:#008DFF
}
.s-label{
    cursor: pointer;
    margin-left:4px;
    margin-right:30px;
    color:#606266
}
.s-radio{
    outline: none;
    position: absolute;
    z-index: -1;
    top: 4px;
    left:1px;
    right: 0;
    bottom: 0;
    margin: 0;
}
.s-radio-box{
    position: relative;
    cursor: pointer;
}
.s-radio-bigBox{
    /* display: inline-block; */
    margin:10px 0
}
.s-radio-box.is-disabled{
    cursor: not-allowed;
}
.s-radio-box.is-disabled .s-radio__inner{
    background: #EEEEEE;
    cursor: not-allowed;
}
.s-radio-box.is-disabled label{
    color: #868686;
    cursor: not-allowed;
}
.s-radio-box.is-disabled .s-radio__inner:after{
    background: #EEEEEE;
    cursor: not-allowed;
}

.s-radio-box.is-disabled.is-checked label{
    color:#868686
}
.s-radio-box.is-disabled.is-checked .s-radio__inner{
        border-color: #DCDFE6;
}
.s-radio-box.is-disabled.is-checked .s-radio__inner:after{
    background:#A0A0A0;    
}
    
</style>
