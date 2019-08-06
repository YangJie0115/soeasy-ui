<template>
    <div  class="s-checkbox-bigBox">
        
        <span  class="s-checkbox-box" v-for="item,index in sCheckedGroup"
        :class="{
            'is-disabled': item.disabled,
            'is-checked':  model[index]
        }"
        @click.stop="chooseSCheckbox(item,index)" 
        >
            <span  class="s-checkbox__inner"></span>
            <input type="checkbox" v-model="model[index]" :value="model"   id="s-checkbox" class="s-checkbox"  >
            <label  class="s-label" style="">{{item.label}}</label>
        </span>
        <!-- :value="curValue(item.value)" -->
    </div>
</template>

<script>
export default {
    name:"sCheckboxGroup",
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
        }
    },
    props:{
        sCheckedGroup:{
            type:Array,
            default:[]
        },
        disabled:Boolean,
       value:{
            type:Array,
            default:[]
        },
    },
    computed:{
        isDisabled(){
            return this.disabled
        },
    },
    watch: {
      
    },
    methods:{
        chooseSCheckbox(val,index){
            if(val.disabled){
                return false;
            }
            this.model[index]=!this.model[index];
            this.model.push(false);
            // 返回value值 
            let arr= this.model.slice(0,this.sCheckedGroup.length);
            let newArr=[];
            for(let i in this.sCheckedGroup){
                if(arr[i]){
                    newArr.push(this.sCheckedGroup[i].value)
                }
            }
            this.$emit('change',newArr);
            this.$emit('input', newArr);
        }
    },
    created(){
        console.log(this.value)

        for(let i in this.sCheckedGroup){
            this.model[i]=false;
            for(let n in this.value){
                if(this.value[n]==this.sCheckedGroup[i].value){
                    this.model[i]=true;    
                }
            }
        }
    }
}
</script>

<style scoped>
.s-checkbox__inner{
    border: 1px solid #dcdfe6;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    top: 2px;
}
.s-checkbox__inner:after {
    box-sizing: content-box;
    content: "";
    border: 1px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 7px;
    left: 4px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(1);
    width: 3px;
    transition: transform .15s ease-in .05s;
    transform-origin: center;
    
}
.s-checkbox-box{
    cursor: pointer;
    display: inline-block
}
.s-checkbox-box.is-checked .s-checkbox__inner {
    border-color: #008DFF;
    background: #008DFF;
}
.s-checkbox-box.is-checked .s-label{
    color:#008DFF
}
.s-label{
    cursor: pointer;
    margin-left:4px;
    margin-right:30px;
    color:#606266
}
.s-checkbox{
    outline: none;
    position: absolute;
    z-index: -1;
    top: 4px;
    left:1px;
    right: 0;
    bottom: 0;
    margin: 0;
}
.s-checkbox-box{
    position: relative;
    cursor: pointer;
}
.s-checkbox-bigBox{
    /* display: inline-block; */
    margin:10px 0
}
.s-checkbox-box.is-disabled{
    cursor: not-allowed;
}
.s-checkbox-box.is-disabled .s-checkbox__inner{
    background: #EEEEEE;
    cursor: not-allowed;
}
.s-checkbox-box.is-disabled label{
    color: #868686;
    cursor: not-allowed;
}
.s-checkbox-box.is-disabled .s-checkbox__inner:after{
    background: #EEEEEE;
    border-color:#EEEEEE;
    cursor: not-allowed;
}
.s-checkbox-box.is-disabled.is-checked label{
    color:#868686
}
.s-checkbox-box.is-disabled.is-checked .s-checkbox__inner{
        border-color: #DCDFE6;
}
.s-checkbox-box.is-disabled.is-checked .s-checkbox__inner:after{
    border-color:#A0A0A0;    
}
    
</style>
