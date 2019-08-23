
# Lxr-tab
**原作者 ScoutYin <yinbin_web@163.com> （如涉及侵权请告知，联系邮箱751236197@qq.com）,在原组件Ly-tab的基础上，增加了激活状态文字大小设置，非激活状态文字颜色、大小设置，增加了标签导航高度设置，滑块定位根据标签导航高度的变化；item是自适应超出滚动还是平分宽度**
> A better mobile touch-swappable reusable component for **Vue 2.0**

 一个用于移动端的可触摸滑动具有回弹效果的可复用Vue组件


clone该仓库到本地可查看演示demo


## Installation
```shell
npm i lxr-tab -S

```
or
```shell
yarn add lxr-tab

```

## Usage

```javascript
import Vue from 'vue'
import LxrTab from 'lxr-tab'

Vue.use(LxrTab)
// 之后便可在全局使用了
```

## Example

> lxr-tab 使用方法：

```html
<lxr-tab
    v-model="selectedId"
    :items="items"
    :options="options">
</lxr-tab>
```

```javascript
export default {
  data () {
    return {
      selectedId: 0,
      items: [
        {label: '首页'},
        {label: '推荐'},
        {label: 'Android'},
        {label: '前端'},
        {label: '后端'},
        {label: 'iOS'},
        {label: '产品'},
        {label: '人工智能'},
        {label: '设计'}
      ],
      options: {
        activeColor: '#1d98bd'
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
    }
  }
}
```


## 可选的配置项：配置项采用Object方式传入

 配置项 | 类型 | 描述 | 默认值
--------|---------|-------|-----
 labelKey | String | 指定item的文字部分在item对象中的key | label
 lineWidth | Number | fixBottom为false时tabbar底部border-width | 1px
 activeColor | String | 激活状态下字体以及滑条颜色 | red
 activeFontSize | String | 激活状态下字体大小 | 12px
 normalColor | String | 非激活状态下字体以及滑条颜色 | #424242
 normalFontSize | String | 非激活状态下字体大小 | 12px
 fixBottom | Boolean | 是否固定在视图底部 | false
 additionalX | Number | 近似等于超出边界时最大可拖动距离 | 50px
 reBoundExponent | Number | 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长) | 10
 sensitivity | Number | 惯性滑动时的灵敏度(值越小，阻力越大),可近似认为手松开后速度减为零所需时间 | 1000ms
 reBoundingDuration | Number | 回弹动画duration | 360ms
 tabHeight|String|tab的高度|30px
 itemEqual|Boolean|item是否平分宽度（不能滚动，文字超出隐藏）|false


## 事件

 事件名 | 参数 | 描述
 --------|---------|---------
 change | item, index | 当前点击的item以及索引值

## Build Setup

```bash
# install dependencies
npm install
# or
yarn

# serve with hot reload at localhost:8080
npm run dev
# or
yarn dev

```


## License
MIT
