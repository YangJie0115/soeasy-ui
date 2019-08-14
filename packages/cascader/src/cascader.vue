<template>
    <div class="s-cascader-group" style="">
        <div class="s-cascader-box" @click="scascaderFocus"  :class="{'is-focus':isFocus}">
            <input class="s-cascader"
                type="text"
                readonly 
                v-model="model" 
                :disabled="isDisabled"  
                :placeholder="placeholder"
                :class="{'is-disabled-options':isDisabled}"   
                v-clickOutSide="handleCloseThis"
             >
            <i class="icon-down1 iconfont"></i>
             <div class="s-cascader-down-box"   :class="{'is-focus':isFocus}">
                <div class="jiao"></div>
                <ul class="s-cascader-down " 
                >
                    <li v-for="item in list" @mouseover="cascaderMouseover(item)" @click="cascaderClick(item)" :class="{'s-cascader-down-hover':modelBox[0]==item.label}">
                        {{item.label}}<i class="rt icon-more iconfont" v-if="item.children.length>0" style="font-size:18px;margin-right:-8px"></i>
                    </li>
                </ul>
            </div>
            <div class="s-cascader-down-box cascader1"   :class="{'is-focus':isFocus}" v-if="isTwo">
                <ul class="s-cascader-down " 
                >
                    <li v-for="item in twoList"  @mouseover="cascaderMouseoverTwo(item)" @click="cascaderClickTwo(item)"  :class="{'s-cascader-down-hover':modelBox[1]==item.label}">
                        {{item.label}}<i class="rt icon-more iconfont"  v-if="item.children.length>0" style="font-size:18px;margin-right:-8px"></i>
                    </li>
                </ul>
            </div>

            
        </div>
        <div class="s-cascader-down-box  cascader2"   :class="{'is-focus':isFocus}" v-if="isThree">
                <ul class="s-cascader-down" 
                >
                    <li v-for="item in threeList" @click="sSelectLi(item)"  :class="{'s-cascader-down-hover':modelBox[2]==item.label}">
                        {{item.label}}
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
import clickOutSide from './clickOutSide';
export default {
    name:"sCascader",
    data(){
        return {
            isFocus:false,
            model:"",
            modelBox:['','',''],
            valueBox:['','',''],
            twoList:[],
            threeList:[],
            isTwo:false,
            isThree:false,
        }
    },
    directives:{clickOutSide},
    props:{
         value:{
             type:Array,
             default:[]
         },
         disabled:Boolean,
         placeholder:{
             type:String,
             default:""
         },
         symbol:{
             type:String,
             default:"-"
         },
         list:{
             type:Array,
             default:[]
         }
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
        scascaderFocus(){
            if(this.disabled){
                return false;
            }
            this.isFocus=true;
        },
        scascaderBlur(){
            setTimeout(()=>{
                this.handleCloseThis()
                this.isFocus=false;
            },100)
        },
        handleCloseThis(){
            this.isFocus=false;
        },
        cascaderMouseover(val){
            if(val.children.length>0){
                this.twoList=val.children;
                this.isTwo=true;
            }else{
                this.isTwo=false;
                this.twoList=[];
            }
            this.isThree=false;
            this.valueBox[0]=val.value;
            this.modelBox[0]=val.label;
            
        },
        cascaderMouseoverTwo(val){
            if(val.children.length>0){
                this.threeList=val.children;
                this.isThree=true;
            }else{
                this.isThree=false;
                this.threeList=[];
            }
             this.valueBox[1]=val.value;
            this.modelBox[1]=val.label;
                
        },
        //选择
        cascaderClick(val){
            if(val.children.length==0){
                this.model=val.label;
                let my=this
                setTimeout(function(){
                    my.isFocus=false;
                },50)
                this.$emit('input',this.valueBox);
                this.$emit('change',this.valueBox);
            }
        },
        cascaderClickTwo(val){
            if(val.children.length==0){
                this.model=this.modelBox[0]+this.symbol+val.label;
                let my=this
                setTimeout(function(){
                    my.isFocus=false;
                },50)
                
                this.$emit('input',this.valueBox);
                this.$emit('change',this.valueBox);
            }
        },
        sSelectLi(val){
            this.model="";
            this.valueBox[2]=val.value;
            this.modelBox[2]=val.label;
            let my=this;
            this.modelBox.forEach(function(item, index){
                if(index==2){
                    my.model=my.model+item
                }else{
                    my.model=my.model+item+my.symbol
                }
            })
            this.$emit('input',this.valueBox);
            this.$emit('change',this.valueBox);
        },

        setSelect(value,list,num=0){
            // console.log(value,list,num)
            num=Number(num)
            for(let i in list){
                if(value[num]==list[i].value){
                    this.modelBox[num]=list[i].label;
                    if(num==2){
                        if(value[2]!=''&&value[2]){
                            this.isThree=true;
                        }
                        this.threeList=list;
                        this.model=this.model+list[i].label;
                    }else if(num==1){
                        if(value[1]!=''&&value[1]){
                            this.isTwo=true;
                        } 
                        this.twoList=list;  
                        this.model=this.model+list[i].label+this.symbol;
                    }else if(num==0){
                        this.model=this.model+list[i].label+this.symbol;
                    }
                    if(list[i].children){
                        this.setSelect(value,list[i].children,num=num+1)
                    }
                    
                }
            }
        }
        
    },
    mounted(){
        this.$children.forEach(item=>{
            if(this.value==item.value){
                item.$emit('chooseOption',this.value)
            }
        })
    },
    created(){
        this.valueBox=JSON.parse(JSON.stringify(this.value))
        this.setSelect(this.value,this.list);
        
        
    }
}
</script>

<style scoped>
.s-cascader-group{
    position: relative;margin:10px 0;
    display: inline-block
}
.s-cascader-box{
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
.s-cascader{
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
.s-cascader:hover{
    border-color: #c0c4cc;
}
.s-cascader:focus{
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


.s-cascader-down-box{
        z-index: 100;
    -moz-transition: height .2s; /* Firefox 4 */
    -webkit-transition: height .2s; /* Safari 和 Chrome */
    -o-transition: height .2s; /* Opera */
    transition: height .2s; /* Opera */
    position: absolute;
    top: 36px;
    left: 0px;
    max-height: 0;
    min-width: 250px;
    overflow: hidden;
    box-sizing: border-box;
}
.s-cascader-down{
    list-style: none;
    padding: 6px 0px;
    line-height: 30px;
    margin: 0;
    box-sizing: border-box;
    border: 1px solid #e4e7ed;
    background-color: #fff;
    margin: 5px 0;
    min-width: 250px;
    max-height:200px;
    box-shadow: 0 1px 14px 0 rgba(0,0,0,.1);
    overflow-y: auto;
    
   
}
.is-focus.s-cascader-down-box{
    max-height: 220px
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
.s-cascader-down li{
    padding:  0px 10px;
    cursor: pointer;
}
.s-cascader-down li:hover{
    background: #F5F7FA;
    color: #409EFF;
    /* font-weight: 800 */
}
.s-cascader-down-hover{
    background: #F5F7FA;
    color: #409EFF;
    /* font-weight: 800 */
}
.cascader1{
    left:249px;
    top: 44px;
}
.cascader2{
     left:498px;
    top: 44px;
}
    
</style>
