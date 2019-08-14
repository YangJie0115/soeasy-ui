<template>
    <div class="s-pagination">
        <span class="lt" style="line-height:30px;margin-right:20px">共 {{total}}  条</span>
        <s-select v-model="howmany" class="lt">
            <s-option :value="item" :label="item+' 条/页'" @click="chooseItem(item)" v-for="item,index in category" :key="index"></s-option>
        </s-select>

        <ul class="s-pagination-box lt" style="margin-left:10px" >
            <li class="s-pagination-left" @click="reduceN"><s-icon icon="icon-left"></s-icon></li>
            <li class="s-pagination-num"
             :class="{'is-active':curNum==item}"
              @click="choosePagination(item)"
               v-for="item,index in list"
               v-if="item!='···'||(isQian&&index==1)||(isHou&&index==list.length-2)"
               >{{item}}</li>
            <li class="s-pagination-left" @click="plusN"><s-icon icon="icon-right"></s-icon></li>
        </ul>
        <div class="lt"  style="margin-left:10px">
            <span>前往&nbsp;&nbsp;</span>
            <input type="text" class="s-pagination-ye" v-model="SPaginationValue" @blur="blurSPagination" @input="SPaginationValue=verInput(SPaginationValue)">
            <span>&nbsp;&nbsp;页</span>
        </div>
    </div>
</template>

<style scoped>
.s-pagination-box{
    display: inline-block
}
    .s-pagination-box li{
        float: left;
        background: #F4F4F5;
        min-width: 30px;
        line-height: 30px;
        margin:0 5px;
        text-align: center;
        cursor: pointer;
    }
 .s-pagination-box  .is-active{
     background: #008dff;
     color:#fff
 }
 .s-pagination-ye{
     -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 30px;
    line-height: 30px;
    outline: none;
    padding: 0 5px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 50px;
    text-align: center
 }
 .s-pagination-ye:hover{
     border-color:#008dff
 }
    
</style>
<script>
export default {
    name:"sPagination",
    data(){
        return {
            list:[],
            num:1,
            curNum:"",
            howmany:"10",
            isgt7:false,
            isQian:false,
            isHou:true,
            SPaginationValue:1
        }
    },
    props:{
        size:{
            type:[String,Number],
            default:10
        },
        total:{
            type:[String,Number],
            default:0
        },
        currentPage:{
            type:[String,Number],
            default:1
        },
        category:{
            type:Array,
            default:[10]
        }
    },
    methods:{
        chooseItem(val){
            this.getTotal(Number(val));
            this.choosePagination(1)
        },
        blurSPagination(){
            if(this.SPaginationValue!=""){
                if(Number(this.SPaginationValue)>this.num){
                    this.choosePagination(this.num)
                }else{
                    this.choosePagination(Number(this.SPaginationValue))
                }
            }
        },
        verInput(str){
            if(str&&str!=''){
                str=str+'';
                let num= str.replace(/[^0-9]/ig,"");
                if(str.length>1){
                    num=num.replace(/\b(0+)/gi,"");
                }
                return num
            }
            return "";
        }, 
        reduceN(){
                let n=this.curNum
                n--;
            if(n>0){
                this.choosePagination(n)
            }
        },
        plusN(){
                 let n=this.curNum
                n++;
            if(n<this.num){
                this.choosePagination(n)
            }
        },
        choosePagination(n){
            // 避免重复点击
            if(this.curNum==n){
                return false;
            }
            this.isHou=true;
            this.isQian=true;
            if(n!='···'){
                this.curNum=n;
            }
            if(n>=5&&this.isgt7){
                if(n<this.num-1){
                    this.list[0]=1;
                    this.list[1]='···';
                    this.list[2]=n-2;
                    this.list[3]=n-1;
                    this.list[4]=n;
                    this.list[5]=n+1;
                    this.list[6]=n+2;
                    this.list[7]='···';   
                    this.list[8]=this.num;
                    if(this.list[6]==this.num-1){ //8
                        this.isHou=false;
                    }else if(this.list[6]==this.num){ //9
                        this.list[0]=1;
                        this.list[1]='···';
                        this.list[2]=n-3;
                        this.list[3]=n-2;
                        this.list[4]=n-1;
                        this.list[5]=n;
                        this.list[6]=n+1;
                        this.list[7]='···';   
                        this.list[8]=this.num;
                        this.isHou=false;
                    }
                    
                }else{
                    this.list[0]=1;
                    this.list[1]='···';
                    this.list[2]=n-5;
                    this.list[3]=n-4;
                    this.list[4]=n-3;
                    this.list[5]=n-2;
                    this.list[6]=n-1;
                    this.list[7]='···';   
                    this.list[8]=n;
                    this.isHou=false;
                }
                
                
            }else if(n<5&&this.isgt7){
                this.isQian=false;
                if(n==4){
                    this.list[0]=1;
                    this.list[1]='···';
                    this.list[2]=n-2;
                    this.list[3]=n-1;
                    this.list[4]=n;
                    this.list[5]=n+1;
                    this.list[6]=n+2;
                    this.list[7]='···';
                    this.list[8]=this.num;
                    
                }else if(n==3){
                    this.list[0]=n-2;
                    this.list[1]='···';
                    this.list[2]=n-1;
                    this.list[3]=n;
                    this.list[4]=n+1;
                    this.list[5]=n+2;
                    this.list[6]=n+3;
                    this.list[7]='···';
                    this.list[8]=this.num;
                }else if(n==1){
                    this.list[0]=n;
                    this.list[1]='···';
                    this.list[2]=n+1;
                    this.list[3]=n+2;
                    this.list[4]=n+3;
                    this.list[5]=n+4;
                    this.list[6]=n+5;
                    this.list[7]='···';
                    this.list[8]=this.num;
                }else if(n==2){
                    this.list[0]=n-1;
                    this.list[1]='···';
                    this.list[2]=n;
                    this.list[3]=n+1;
                    this.list[4]=n+2;
                    this.list[5]=n+3;
                    this.list[6]=n+4;
                    this.list[7]='···';
                    this.list[8]=this.num;
                }
            }
            this.$emit('handlePage',n)
            
        },
        getTotal(size){
            this.howmany=size;
            this.list=[];
            this.num=Math.ceil(this.total/size);
            if(this.num>7){
                this.isgt7=true;
                for(let i=0; i<7;i++ ){
                    if(i==0){
                        this.list.push(i+1)
                    }else if(i==1){
                        this.list.push('···')
                    }else{
                        this.list.push(i)
                    }
                }
                this.list[7]='···';
                this.list[8]=this.num;
            }else{
                this.isgt7=false;
                for(let i=0; i<this.num;i++ ){
                    this.list.push(i+1)
                }
            }
        },
        getCurrentPage(){
            // this.curNum=this.currentPage;
            this.choosePagination(this.currentPage);
        }
    },
    watch:{
        currentPage(newVal,oldVal){
            this.getCurrentPage()
        },
        size(newVal,oldVal){
            this.getTotal(this.size);
        },
        total(newVal,oldVal){
             this.getTotal(this.size);
        },
    },
    created(){
         this.getTotal(this.size);
        this.getCurrentPage();
         
    },
    computed:{
       
    },
}
</script>
