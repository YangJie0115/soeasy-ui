<template>
   
    <div id="">
        <p class=" f30 mb20">1.导航栏示例</p>
        <p class="mb10"><strong>大小不一的input</strong> </p>
        <s-nav-menu  path="/navMenu6">
            <s-nav-menu-tit to='/navMenu' icon="icon-yingyongguanli">菜单一</s-nav-menu-tit>
            <s-nav-menu-tit to='/navMenu2' icon="icon-yingyongguanli" iconType="right">菜单三</s-nav-menu-tit>
            <s-nav-menu-tit icon="icon-down1" iconType="down" >
                下拉菜单四
                <s-nav-menu-group>
                    <s-nav-menu-item to='/navMenu5'>下拉1</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu6'>下拉2</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu7'>下拉3</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu8'>下拉4</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu9'>下拉4</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu10'>下拉4</s-nav-menu-item>
                </s-nav-menu-group>
            </s-nav-menu-tit>
            
            <s-nav-menu-tit  to='/navMenu11'>菜单五</s-nav-menu-tit>
        </s-nav-menu>

        <div style="height:20px;width:100%"></div>

        <s-nav-menu  path="/navMenu66">
            <s-nav-menu-tit to='/navMenu' icon="icon-yingyongguanli">菜单一</s-nav-menu-tit>
            <s-nav-menu-tit  icon="icon-down1" iconType="down">菜单二
                <s-nav-menu-group>
                    <s-nav-menu-item to='/navMenu5'>下拉1</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu6'>下拉2</s-nav-menu-item>
                    <s-nav-menu-item icon="icon-more">
                    下拉3
                        <s-nav-menu-group twoItem>
                            <s-nav-menu-item to='/navMenu55'>下拉1</s-nav-menu-item>
                            <s-nav-menu-item to='/navMenu66'>下拉2</s-nav-menu-item>
                            <s-nav-menu-item to='/navMenu77'>下拉3</s-nav-menu-item>
                            <s-nav-menu-item to='/navMenu88'>下拉4</s-nav-menu-item>
                            <s-nav-menu-item to='/navMenu99'>下拉4</s-nav-menu-item>
                            <s-nav-menu-item to='/navMenu100'>下拉4</s-nav-menu-item>
                        </s-nav-menu-group>
                    </s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu8'>下拉4</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu9'>下拉4</s-nav-menu-item>
                    <s-nav-menu-item to='/navMenu10'>下拉4</s-nav-menu-item>
                </s-nav-menu-group>
            </s-nav-menu-tit>
            <s-nav-menu-tit to='/navMenu2' icon="icon-yingyongguanli" iconType="right">菜单三</s-nav-menu-tit>
            
            <s-nav-menu-tit  to='/navMenu11'>菜单五</s-nav-menu-tit>
        </s-nav-menu>

        <div style="height:20px;width:100%"></div>

        <s-nav-menu  path="/navMenu2">
            <s-nav-menu-tit to='/navMenu'>菜单一</s-nav-menu-tit>
            <s-nav-menu-tit to='/navMenu1' icon="icon-yingyongguanli" >菜单二</s-nav-menu-tit>
            <s-nav-menu-tit to='/navMenu2' icon="icon-yingyongguanli" iconType="right">菜单三</s-nav-menu-tit>
            <s-nav-menu-tit  to='/navMenu11'>菜单五</s-nav-menu-tit>
        </s-nav-menu>


        <p class=" f30 mb20 mt20">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>
    </div>

</template>

<script >
import doc from '../../../docs/dialog.md'
export default {
    components:{
        doc
    },
    data(){
        return {
            dialogTableVisible:false
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>