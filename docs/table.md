

#### 代码

#### 表格1 tHead key如果要设为序号时  name值为#；
```html  Python
<s-table :list="list" :tHead="tHead" ></s-table>
data(){
    return {
        list:[
            {name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了"},
            {name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},
            {name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},
            {name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},
            {name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空"},
        ],
        tHead:[
            {key:"序号",name:"#",width:"50px"},
            {key:"名字",name:"name",width:"150px"},
            {key:"年龄",name:"age",width:"100px"},
            {key:"性别",name:"sex",width:"80px"},
            {key:"地址",name:"adress"},
        ],
    }
}
```

#### 表格2  加入操作按钮  tHead1数组最后一个的name值为空  border 为边框属性
```html  Python
<s-table :list="list" :tHead="tHead1" border>
    <td v-if="tHead1[tHead1.length-1].name==''" :style="{width:tHead1[tHead1.length-1].width}">
        <a style="color:#409eff">删除</a>
    </td>
</s-table>
data(){
    return {
        list:[
            {name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了"},
            {name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},
            {name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},
            {name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},
            {name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空"},
        ],
        tHead1:[
            {key:"名字",name:"name",width:"150px"},
            {key:"年龄",name:"age",width:"100px"},
            {key:"性别",name:"sex",width:"80px",textAlign:"center"},
            {key:"地址",name:"adress"},
            {key:"操作",name:"",width:"100px"},
        ]
    }
}
```

#### 表格3  固定头部  s-table 由一个有id属性的div 包起来，然后将id 传入组件      加上fixed  和 heght 属性一起使用  thead中的width也必须一起使用
```html  Python
<div  id="fixeds">
    <s-table id="fixeds" :list="list" :tHead="tHead1" border fixed height="100px">
        <td v-if="tHead1[tHead1.length-1].name==''" :style="{width:tHead1[tHead1.length-1].width}">
            <a style="color:#409eff">详情</a>
        </td>
    </s-table>
</div>
data(){
    return {
        list:[
            {name:"杨**",age:16,sex:"男",adress:"浙江神阿斯利康大家爱丽丝的骄傲临时搭建ask了"},
            {name:"张**",age:33,sex:"男",adress:"阿三大苏打实打实大洛杉矶肯德基爱丽丝的"},
            {name:"翰**",age:45,sex:"女",adress:"讨论客人今天了客人就退了就特开了"},
            {name:"李**",age:66,sex:"男",adress:"从v这些邻居快节奏旋律节奏旋律"},
            {name:"德**",age:55,sex:"女",adress:"和老公开发和两个房间快乐和开发计划落空"},
        ],
        tHead1:[
            {key:"名字",name:"name",width:"150px"},
            {key:"年龄",name:"age",width:"100px"},
            {key:"性别",name:"sex",width:"80px",textAlign:"center"},
            {key:"地址",name:"adress"},
            {key:"操作",name:"",width:"100px"},
        ]
    }
}
```



#### Props
### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| border |  Boolean  |禁用  |  true,false | false |
| height |  String  |表格高度  |  ”“| "" |
| list |  Array  | 传入的数据 | ”“  | [] |
| tHead |  Array  | 头部的数组参数 | ”“  | "" |

#### tHead

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| key     |  String|头部的名称  |""   |      |
| name   |   String|list数据的key值  为""用于操作按钮显示   为#展示序号|     |     |
| width |  String  |td的宽度  在固定头部的时候必须给  |  val |  |
| textAlign |  String  |对齐方式  |  center ,left,right |left  |
