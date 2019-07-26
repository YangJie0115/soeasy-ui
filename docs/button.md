

#### 自定义颜色

```html 
<i-button color="steelblue">自定义颜色</i-button>
<i-button color="whitesmoke" text-color="rosybrown" round>自定义颜色</i-button>
<i-button color="thistle" dashed circle><i-icon name="heart-o" /></i-button>
```

#### 按钮尺寸

```html 
<i-button type="default" size="large">大号按钮</i-button>
<i-button type="default" size="normal">正常按钮</i-button>
<i-button type="default" size="small">小型按钮</i-button>
<i-button type="default" size="mini">迷你按钮</i-button>
```

#### Props




<| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为 `default` `primary`<br />`info` `danger` `warning` | `String` | `default` |
| plain | 是否为空心按钮 | `Boolean` | `false` |
| dashed | 是否为虚线按钮 | `Boolean` | `false` |
| circle | 是否为圆形按钮 | `Boolean` | `false` |
| round | 是否为圆角按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否为 loading 状态 | `Boolean` | `false` |
| size | 尺寸，可选值为 `normal` `large`<br />`small` `mini` | `String` | `normal` |
| color | 按钮颜色 | `String` | `''` |
| text-color | 按钮字体颜色 | `String` | 1、未设置`color`情况下为`''`<br />2、否则为`color`或`#fff`<br />_取决于`plain` `dashed`_ |
