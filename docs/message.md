

#### 4种类型

```html  Python
<s-button type="" @click="open" hollow> 默认</s-button>
<s-button type="success" @click="open1" hollow>成功</s-button>
<s-button type="warning" @click="open3" hollow>警告</s-button>
<s-button type="danger" @click="open4" hollow>危险</s-button>
```


#### 事件

```html 
open(){
    this.$message("这是一条默认的信息！")
    //或者
    this.$message({
        message:"这是一条成功的信息!",
        type:"info",
        duration:"5000"
    })
},
open1(){
    this.$message({
        message:"这是一条成功的信息!",
        type:"success",
        duration:"5000"
    })
},
open3(){
    this.$message({
        message:"这是一条警告信息!",
        type:"warning"
    })
},
open4(){
    this.$message({
        message:"这是一条危险的信息!",
        type:"danger"
    })
}
```


#### Props



### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| type     |  String|message得类型|success，info，warning，danger   |  info     |
| message   |   String|提示语 |     |      |
| duration |  String  |显示时间 毫秒单位  |   | 3000 |
