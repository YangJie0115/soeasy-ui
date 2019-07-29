<template>
    <button 
        :style="colorBox"
        :class="[
            type ?'s-button-'+type:'s-button',
            {
                'is-disabled': isDisable,
                'is-fillet':isFillet,
                'is-hollow':isHollow
            }
        ]"
        :disabled="isDisable"
        @click="handleClick"
    >
        <i class="iconfont" :class="icon" v-if="left"></i>
        <slot></slot>
        <i class="iconfont" :class="icon"  v-if="!left"></i>
    </button>
</template>

<script>
export default {
    name:"sButton",
    props:{
        type: {
            type: String,
            default: ''
        },
        color: {
            type: Array,
            default:()=>{
                return ['none','none',"none"]
            }
        },
        icon: {
            type: String,
            default:""
        },
        disabled:Boolean,
        fillet:Boolean,
        hollow:Boolean,
        left: {
            type: Boolean,
            default:false
        },
    },
    computed:{
        colorBox(){
            if(this.color[0]=='none'&&this.color[1]=='none'&&this.color[2]=='none'){
                return {};
            }else{
                 return {"color":this.color[0],"background":this.color[1],"borderColor":this.color[2] };
            }
        },
        isDisable(){
            return this.disabled
        },
        isFillet(){
            return this.fillet
        },
        isHollow(){
            return this.hollow
        },
        
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
    
}
</script>
