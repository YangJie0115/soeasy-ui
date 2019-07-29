<template>
    <div id="icon">
        <p class=" f30 mb20">1.图标库示例</p>
        <p class="mb10">提供了一套常用的图标集合。</p>
        <div class="iconList">
            <div class="lt">
                <s-icon icon="icon-more"></s-icon><br><br>
                <span>icon-more</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-RectangleCopy"></s-icon><br><br>
                <span>icon-RectangleCopy</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-icon_chexiao"></s-icon><br><br>
                <span>icon-icon_chexiao</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-icon_zhongzhi"></s-icon><br><br>
                <span>icon-icon_zhongzhi</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-up1"></s-icon><br><br>
                <span>icon-up1</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-forward"></s-icon><br><br>
                <span>icon-forward</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-down1"></s-icon><br><br>
                <span>icon-down1</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-check"></s-icon><br><br>
                <span>icon-check</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-add"></s-icon><br><br>
                <span>icon-add</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-back"></s-icon><br><br>
                <span>icon-back</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-yunhang"></s-icon><br><br>
                <span>icon-yunhang</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-guangbo"></s-icon><br><br>
                <span>icon-guangbo</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-youhui"></s-icon><br><br>
                <span>icon-youhui</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-youhui"></s-icon><br><br>
                <span>icon-youhui</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-kefu"></s-icon><br><br>
                <span>icon-kefu</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-arrowdown"></s-icon><br><br>
                <span>icon-arrowdown</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-arrowleft"></s-icon><br><br>
                <span>icon-arrowleft</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-arrowup"></s-icon><br><br>
                <span>icon-arrowup</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-arrowright"></s-icon><br><br>
                <span>icon-arrowright</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-down"></s-icon><br><br>
                <span>icon-down</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-up"></s-icon><br><br>
                <span>icon-up</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-left"></s-icon><br><br>
                <span>icon-left</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-right"></s-icon><br><br>
                <span>icon-right</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-shangyibu"></s-icon><br><br>
                <span>icon-shangyibu</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-xiayibu"></s-icon><br><br>
                <span>icon-xiayibu</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-icon_zhanghao"></s-icon><br><br>
                <span>icon-icon_zhanghao</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-icon_yulan"></s-icon><br><br>
                <span>icon-icon_yulan</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-icon_tianjia"></s-icon><br><br>
                <span>icon-icon_tianjia</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-icon_loading"></s-icon><br><br>
                <span>icon-icon_loading</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-zidingyi"></s-icon><br><br>
                <span>icon-zidingyi</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-yingyongguanli"></s-icon><br><br>
                <span>icon-yingyongguanli</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-rili"></s-icon><br><br>
                <span>icon-rili</span>
            </div>
            <div class="lt">
                <s-icon icon="icon-chazhao"></s-icon><br><br>
                <span>icon-chazhao</span>
            </div>
        </div>

        <p class=" f30 mb20 mt20">2.文档示例</p>
        <div  class="markdown-body">
            <doc></doc>
        </div>

    </div>
</template>

<script >
import doc from '../../../docs/icon.md'
export default {
    components:{
        doc
    }
}
</script>
<style scoped>
.iconList{
    border-top:1px solid  #eeeeee;
    border-left:1px solid  #eeeeee;
    overflow: hidden;
}
.iconList div{
    padding-top:20px;
    width:151px;
    height:120px;
    text-align:center;
     border-right:1px solid  #eeeeee;
    border-bottom:1px solid  #eeeeee;
    cursor: pointer;
}
.iconList div:hover{
    color:#008dff
}
</style>