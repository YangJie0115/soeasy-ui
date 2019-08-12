

#### 普通的

```html  Python
<s-select v-model="value" @change="changeOption">
    <s-option value="11" label="按时打算"></s-option>
    <s-option value="22"  label="2"></s-option>
    <s-option value="33" label="3" ></s-option>
    <s-option value="44" label="4"></s-option>
    <s-option value="55" label="5"></s-option>
    <s-option value="66" label="6"></s-option>
    <s-option value="00" label="0"></s-option>
</s-select>

```
>value给定 对应的value值 


#### 有禁用选项

```html  Python
<s-select v-model="value1" @change="changeOption">
    <s-option value="11" label="按时打算"></s-option>
    <s-option value="22"  label="2" disabled></s-option>
    <s-option value="33" label="3" ></s-option>
    <s-option value="44" label="4"></s-option>
    <s-option value="00" label="0"></s-option>
</s-select>

```

#### 禁用

```html  Python
<s-select v-model="value2" @change="changeOption" disabled>
    <s-option value="11" label="按时打算"></s-option>
    <s-option value="22"  label="2" disabled></s-option>
    <s-option value="33" label="3" ></s-option>
    <s-option value="44" label="4"></s-option>
    <s-option value="00" label="0"></s-option>
</s-select>

```

#### Props
### 参数说明 s-select

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| value|  |绑定的value值|   |    |
| disabled |  Boolean  |禁用  |  true,false | false |


#### Props
### 参数说明 s-option

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| value|  |选项的value值|   |    |
| disabled |  Boolean  |禁用  |  true,false | false |


#### Events
### 事件说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| change |  Events  |value值  |  tvale |  |
