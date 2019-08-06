

#### 大小不一的input 默认250 *30

```html  Python
<s-input type="text"   width="100" height="30" placeholder="请输入111">输入框</s-input>
<s-input type="text"   width="200" height="40" placeholder="请输入111">输入框</s-input>
<s-input type="text"   width="300" height="30" placeholder="请输入111">输入框</s-input>
<s-input type="text"   placeholder="请输入111">输入框</s-input>
```

#### 类型       
textarea  radio  checked除外  单独封装了一个组件
```html  Python
<s-input type="text"   width="100" height="30" placeholder="请输入111">输入框</s-input>
<s-input type="password"   width="200" height="40" placeholder="请输入111">输入框</s-input>
<s-input type="number"   width="300" height="30" placeholder="请输入111">输入框</s-input>
```

#### disabled禁用  readonly可读

```html 
<s-input type="text"   disabled>disabled禁用</s-input>
<s-input type="text"   readonly>readonly可读</s-input>
```

#### 带图标的input

```html 
<s-input type="text"   iconlt="icon-chazhao">图标左</s-input>
<s-input type="text" iconrt="icon-chazhao">图标右</s-input>
```

#### 输入框长度  +  v-model

```html 
<s-input type="text" v-model="value" width="250" height="30" placeholder="限制长度" maxlength="3">输入框</s-input>
```

#### Props
### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| type     |  String|input得类型|text/password....   |   text   |
| value   |   String|值 |     |   ""   |
| disabled |  Boolean  |禁用  |  true,false | false |
| readonly |  Boolean  |可读  |  true,false | false |
| maxlength |  String  |输入框长度  |  ”“| "" |
| iconlt |  String  |图标 左  |  “” | “” |
| iconrt |  String  |图标 右  |  “” | “” |
| placeholder |  String  | 提示语 | ”“  | "" |
| width |  String  | 宽度 | ”“  | "250" |
| height |  String  | 高度以及行高 | ”“  | "30" |

#### 事件

```html 
<s-input type="text"   @input="handInput">图标左</s-input>
<s-input type="text"    @focus="handFocus" >图标左</s-input>
<s-input type="text"    @blur="handBlur" >图标左</s-input>
<s-input type="text"    @change="handChange" >图标左</s-input>
```




#### Events
### 事件说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| input     |  Events|input值|val   |      |
| focus   |   Events|input值 |   val  |     |
| blur |  Events  |input值  |  val |  |
| change |  Events  |input值  |  tvale |  |
