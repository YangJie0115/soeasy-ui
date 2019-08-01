<template>
    <div  class="s-textarea">
        <textarea name="" id=""
         :rows="rows" 
         :disabled="isDisabled" 
         :readonly="isReadonly" 
         :placeholder="placeholder"
         :maxlength="maxlength" 
         :class="{'s-textarea-isDisabled':isDisabled}"
         :value="curValue"
          @input="input"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
         >
         </textarea>
         <span v-if="count">{{num}}/{{maxlength}}</span>
         
    </div>
</template>

<script>
export default {
    name:"sTextarea",
    data(){
        return {
            curValue:this.value===undefined||this.value===null?"":this.value,
            num:0,
            isTrue:false
        }
    },
    props:{
        rows:{
            type:String,
            default:""
        },
        disabled:Boolean,
        readonly:Boolean,
        count:Boolean,
        placeholder:{
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
            this.num=this.curValue.length;
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
        
    }
}
</script>

<style scoped>
.s-textarea{
    position: relative;
}
    .s-textarea textarea{
        outline: none;
        border: 1px solid #C0C4CC;
        border-radius: 4px;
        padding:6px 10px;
        width:100%
    }
    .s-textarea-isDisabled{
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
    }
    .s-textarea span{
        position: absolute;
        bottom:10px;
        right: 10px;
        color: #A5A5A5;
    }
    
</style>
