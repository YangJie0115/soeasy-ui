

#### 代码

```html  Python
<s-radio-group :sRadioGroup="sRadioGroup" v-model="radio"  name="a"></s-radio-group>
<s-radio-group :sRadioGroup="sRadioGroup1" v-model="radio1"  name="a1"></s-radio-group>


data(){
    return {
        radio:2,
        radio1:2,
        sRadioGroup:[
            {label:'选项1',value:1},
            {label:'选项2',value:2},
            {label:'选项选项3',value:3},
        ],
        sRadioGroup1:[
            {label:'选项1',value:1,disabled:"true"},
            {label:'选项2',value:2,disabled:"true"},
            {label:'选项选项3',value:3},
        ]
    }
}

```



#### Props
### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| sRadioGroup|  Array|radio的数组选项| []  |   []  |
| disabled |  Boolean  |禁用  |  true,false | false |


#### 事件

```html 
<s-radio-group :sRadioGroup="sRadioGroup1" v-model="radio1"  @change="handlchange"  name="a1"></s-radio-group>
 methods:{
    handlchange(val){
        console.log(val)
    }
}
```




#### Events
### 事件说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| change |  Events  |radio值  |  tvale |  |
