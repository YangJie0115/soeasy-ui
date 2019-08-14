

#### 代码标签


```html  Python
<s-pagination
    :total="103"
    :size="10"
    :currentPage="9"
    :category="[10,20,30,5]"
    @handlePage="handlePage"
></s-pagination>
```




#### Props



### 参数说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| total|  Number|总数量|   |   0  |
| size|  Number|分页数 在下方category配置的数组中找|   |   10  |
| currentPage|  Number|当前页|   |   1  |
| category |  Array  |分页选项  |   | [10] |

#### Events
### 事件说明

| 属性     | 类型| 参数说明  | 参数   |  默认值  |
| -------- | -----:| -----:  |-----:  | :----:  |
| handlePage |  Events  |分页值  |  tvale |  |