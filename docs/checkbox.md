

#### 代码

```html  Python
<s-checkbox-group :sCheckedGroup="sCheckedGroup" v-model="checked"  name="a"></s-checkbox-group>
<s-checkbox-group :sCheckedGroup="sCheckedGroup1" v-model="checked1" @change="handlclick"  name="a1"></s-checkbox-group>


data(){
    return {
        checked:[1,3],
        checked1:[1],
        sCheckedGroup:[
            {label:'选项1',value:1},
            {label:'选项2',value:2},
            {label:'选项选项3',value:3},
        ],
        sCheckedGroup1:[
            {label:'选项1',value:1,disabled:"true"},
            {label:'选项2',value:2,disabled:"true"},
            {label:'选项选项3',value:3},
        ]
    }
},
methods:{
    handlclick(val){
        console.log(val)
    }
}

```
>checked值为数组，传value值得数组集合进去即可  


#### Props
### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| sCheckedGroup|  Array|checkbox的数组选项| []  |   []  |
| disabled |  Boolean  |禁用  |  true,false | false |





#### Events
### 事件说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| change |  Events  |radio值  |  tvale |  |
