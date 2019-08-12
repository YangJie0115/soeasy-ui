<template>
    <li @click="handleChooseLi($event)"
        :class="{
            'is-select':isSelelct===value,
            'is-disabled-option':isDisabled
        }"
    >{{label}}</li>
</template>

<script>
export default {
    name:"sOption",
    data(){
        return {
            curValue(val){
                // if(this.value&&this.value!=""){
                //     this.model=this.value;
                //     return this.value
                // }else{
                //     return val
                // }
            },
            model:[],
            isSelelct:null,
            
        }
    },
    props:{
        value:{
            default:""
        },
        label:{
            default:""
        },
        disabled:Boolean,
    },
    computed:{
        isDisabled(){
            return this.disabled
        },
    },
    watch: {
      
    },
    methods:{
        handleChooseLi(event){
            if(this.isDisabled){

            }else{
                this.$parent.$emit('handleOptionClick',[this.label,this.value])
            }
             
        },
        handleOptionSelect(data){
            this.isSelelct=data
        },
        removeClassSelect(){
            this.isSelelct=null;
        }
    },
    created(){

        this.$on('chooseOption', this.handleOptionSelect);
        this.$on('removeClass', this.removeClassSelect);
    }
}
</script>

<style scoped>
li{
    padding: 0px 10px;
    cursor: pointer;
}
li:hover{
    background: #F5F7FA
}  
.is-select{
    color:#008dff;
    font-weight: 800
} 
.is-disabled-option{
    color:#c0c4cc;
    cursor: not-allowed;
} 
</style>
