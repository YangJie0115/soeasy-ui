<template>
    <div class="s-input-box" style=" display: inline-block;position: relative;">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<slot></slot>&nbsp;&nbsp;
        <div style=" display: inline-block;position: relative">
            <s-icon class="s-left-i-lt" :class="iconlt" v-if="iconlt!=''"></s-icon>
            <input 
            class="s-input" 
            ref="input"
            :type="type"
            :value="curValue"
            @input="input"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :disabled="isDisabled"
            :class="{'s-input-isDisabled':isDisabled==true,'s-input-isReadonly':isReadonly==true,'iconLt':iconlt!='','iconRt':iconrt!=''}"
            :placeholder="placeholder"
            :readonly="isReadonly"
            :maxlength="maxlength"
            @compositionstart="handleComposition"
            @compositionupdate="handleComposition"
            @compositionend="handleComposition"
            >
            <s-icon class="s-left-i-rt" :class="iconrt" v-if="iconrt!=''"></s-icon>
        </div>
    </div>
</template>

<script>
export default {
    name:"sInput",
    data(){
        return {
            curValue:this.value===undefined||this.value===null?"":this.value,
            isTrue:false,
        }
    },
    props:{
        type:{
            type:String,
            default:"text"
        },
        value:{
            type:[String,Number],
            default:""
        },
        width:{
            type:String,
            default:"250"
        },
        height:{
            type:String,
            default:"30"
        },
        disabled:Boolean,
        readonly:Boolean,
        placeholder:{
            type:String,
            default:""
        },
        iconlt:{
            type:String,
            default:""
        },
        iconrt:{
            type:String,
            default:""
        },
        maxlength:{
            type:String,
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
      value(val, oldValue) {
        this.curValue=val;
      }
    },
    methods:{
        handleComposition(event){
            if(event.type==='compositionend'){
                this.isTrue=false;
                this.input(event)
            }else{
                this.isTrue=true;
            }
        },
        input(){
            this.curValue=event.target.value;
            if(this.isTrue) return ;
            this.$emit('input',event.target.value);
        },
        handleFocus(){
            this.$emit('focus',this.curValue);
        },
        handleBlur(){
             this.$emit('blur',this.curValue);
        },
        handleChange(){
             this.$emit('change',this.curValue);
        },
    },
    mounted(){
        // 设置css
        this.$refs.input.style.width=this.width+"px";
        this.$refs.input.style.height=this.height+"px";
        this.$refs.input.style.lineHeight=this.height+"px";
    }
}
</script>

<style scoped>
    .s-input-box{
        margin:5px;
        width: inherit !important; 
    }
    .s-input-box .s-left-i-lt{
        position: absolute;
        left: 10px;
        top: 7px;
        color: #c0c4cc;
    }
    .s-input-box .s-left-i-rt{
        position: absolute;
        right: 10px;
        top: 7px;
        color: #c0c4cc;
    }
    .s-input{
        outline: none;
        border:1px solid #C0C4CC;
        line-height: 30px;
        padding-left:10px;
        border-radius: 4px;
        width: 250px;
    }
    .s-input:focus{
        border:1px solid #008dff;
    }
    .s-input-isDisabled{
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
    }
    .s-input-isReadonly:focus{
        border:1px solid #C0C4CC;
    }
    .iconLt{
        padding-left:30px
    }
    .iconRt{
        padding-right:30px
    }

    input::-webkit-input-placeholder{
        color:#C0C4CC;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:#C0C4CC;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:#C0C4CC;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
        color:#C0C4CC;
    }
    
</style>
