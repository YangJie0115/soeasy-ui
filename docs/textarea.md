

#### 代码

```html  Python
<s-textarea rows="10" cols="100" count  v-model="value" maxlength="30"></s-textarea>
<s-textarea class="lt  mr10" rows="2"  maxlength="10"  placeholder="限制长度为10"></s-textarea>
<s-textarea class="lt mr10" rows="2" disabled  placeholder="禁用"></s-textarea>
<s-textarea class="lt" rows="2" readonly placeholder="只读"></s-textarea>
```



#### Props
### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| rows     |  String|textarea的行数|"2","6"   |   ""   |
| disabled |  Boolean  |禁用  |  true,false | false |
| readonly |  Boolean  |可读  |  true,false | false |
| maxlength |  String  |输入框长度  |  ”“| "" |
| placeholder |  String  | 提示语 | ”“  | "" |
| count |  Boolean  | 计数 | ”“  | "" |

#### 事件

```html 
<s-textarea   @input="handInput"></s-textarea>
<s-textarea     @focus="handFocus" ></s-textarea>
<s-textarea     @blur="handBlur" ></s-textarea>
<s-textarea     @change="handChange" ></s-textarea>
```




#### Events
### 事件说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| input     |  Events|input值|val   |      |
| focus   |   Events|input值 |   val  |     |
| blur |  Events  |input值  |  val |  |
| change |  Events  |input值  |  tvale |  |
