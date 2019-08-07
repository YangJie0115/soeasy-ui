<template>
    <div class="s-table-box" >
        <table  class="s-table" cellpadding="0"  cellspacing="0" id="s-thead-fixed"  style="margin-bottom:-1px"
        :class="{
            sTableBorder:isBorder,
            sTableFixed:isFixed,
        }"
        >
            <thead>
                <tr>
                    <td :style="{width:item.width,textAlign:item.textAlign}" v-for="item in tHead"  >{{item.key}}</td>
                </tr>
            </thead>
        </table>
        <div class="t-table-scroll" :style="{height:height}">
            <table  class="s-table" cellpadding="0"  cellspacing="0"   id="s-thead1-fixed"
            :class="{
                sTableBorder:isBorder,
                sTableFixed:isFixed,
            }"
            >
                <tbody>
                    <tr  v-for="item,index in list">
                        <td  :style="{width:it.width,textAlign:it.textAlign}" v-for="it in tHead" v-if="it.name!=''">
                            <span v-if="it.name=='#'" >{{index+1}}</span>
                            <span v-else>{{item[it.name]}}</span>
                        </td>
                        <slot ></slot>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name:"sTable",
    data(){
        return {
           
        }
    },
    props:{
        list:{
            type:Array,
            default:[]
        },
        tHead:{
            type:Array,
            default:[]
        },
        border:Boolean,
        fixed:Boolean,
        height:{
            type:String,
            default:""
        },
        id:{
            type:String,
            default:""
        },
    },
    computed:{
       isBorder(){
           return this.border;
       },
       isFixed(){
           return this.fixed;
       }
    },
    watch: {
       
    },
    methods:{
         tableHeadStop(id){	
            // table 固定表头'
            let my =this;
            this.myTable(id)
            window.onresize = function(){//当浏览器大小变化时
                my.myTable(id)
            }
        },
        myTable(id) {
            let doc=document.getElementById(id);
            doc.getElementsByClassName("sTableFixed")[0].style.width=Number(doc.getElementsByClassName("sTableFixed")[1].scrollWidth)+1+"px"
        }   
    },
    mounted(){
        if(this.id!=''&&this.fixed){
            this.tableHeadStop(this.id);
        }
    },  
}
</script>

<style scoped>
.s-table-box{
    margin:20px 0;
}
.s-table{
    width: 100%;
    line-height: 40px;
    box-sizing: border-box;
    height: 40px;
    /* margin:20px 0; */
}
.s-table tr td{
    border-bottom:1px solid #E8E8E8;
    padding:0 10px;
}
.sTableBorder{
    border-top:1px solid #E8E8E8;
    border-left:1px solid #E8E8E8;
}
.sTableBorder td{
    border-bottom:1px solid #E8E8E8;
    border-right:1px solid #E8E8E8;
    
}
.s-table thead td{
    /* background:#F2F2F2; */
    font-weight: 700
}
.s-table tbody tr:hover{
    background: #F7F7F7;
    cursor: pointer;
}
.t-table-scroll{
    overflow-y:auto
}


    
</style>
