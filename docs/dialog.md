

#### 4种类型

```html  Python
<s-dialog 
    title="这是一个dialog"
    width="800"
    :sVisible.sync="dialogTableVisible"
    >
    <div slot="sMain">
        111
    </div>
    <div slot="sFoot">
        <s-button type="primary" @click="dialogTableVisible=false">确定</s-button>
        <s-button  @click="dialogTableVisible=false">取消</s-button>
    </div>
</s-dialog>
```





#### Props



### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| title     |  String|模板抬头|  |       |
| width   |   String|模板宽度 |     |      |
| dialogTableVisible |  Boolean  |控制显示，支持sync  | true,false  | false |
