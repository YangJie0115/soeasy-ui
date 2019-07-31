

#### 六种基本按钮

```html  Python
<s-button  >默认按钮</s-button>
<s-button type="primary" >主要按钮</s-button>
<s-button type="success" >成功按钮</s-button>
<s-button type="info" >信息按钮</s-button>
<s-button type="warning" >警告按钮</s-button>
<s-button type="danger" >危险按钮</s-button>
```



#### 圆角按钮

```html 
<s-button  fillet>默认按钮</s-button>
<s-button type="primary" fillet>主要按钮</s-button>
```

#### 空心按钮

```html 
<s-button  hollow>默认按钮</s-button>
<s-button type="primary" hollow>主要按钮</s-button>
```

#### 禁用按钮

```html 
<s-button  disabled>默认按钮</s-button>
<s-button type="primary" disabled>主要按钮</s-button>
```

#### 带图标得按钮
left来控制图标的显示位置

```html 
<s-button icon="icon-RectangleCopy" left>默认按钮</s-button>
<s-button type="primary" icon="icon-check" left>主要按钮</s-button>
<s-button type="success"   icon="icon-icon_chexiao" left>成功按钮</s-button>
<s-button type="info"  icon="icon-xiayibu" >信息按钮</s-button>
<s-button type="warning"  icon="icon-icon_yulan" >警告按钮</s-button>
<s-button type="danger"  icon="icon-check" >危险按钮</s-button>
```

#### 自定义颜色按钮

```html 
<s-button  :color="['#fff','#FF5F5F']" >自定义颜色</s-button>
<s-button  :color="['#fff','#7979FF','#7979FF']" >自定义颜色</s-button>
```
>自定义颜色按钮适用得属性  disabled颜色得变化暂无 和原来一致

#### Props



### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| type     |  String|按钮得类型|primary，success，info，warning，danger   |   “”     |
| fillet   |   Boolean|是否是半圆得边 |  true,false   |   false   |
| hollow |  Boolean  |空心  |  true,false | false |
| disabled |  Boolean  |禁用  |  true,false | false |
| left |  Boolean  |图标的左右位置  |  true,false | false |
| icon |  String  |图标  |  “” | “” |
| color |  Array  | 自定义按钮的颜色 | [字体颜色,背景色,border颜色]  | [none,none,none] |
