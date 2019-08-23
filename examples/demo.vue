<template>
    <div class="demo">
        <lxr-tab
                v-model="selectedId"
                :items="items"
                :options="options"
                @change="handleChange">
        </lxr-tab>
        <h3>请选择移动端调试模式或者真机调试</h3>
        <!-- 通过指定fixBottom为true实现固定在底部的tab -->
        <lxr-tab
                v-model="bottomSelectedId"
                :items="bottomItems"
                :options="bottomOptions">
        </lxr-tab>
    </div>
</template>

<script>

  export default {
    name: 'Demo',
    data () {
      return {
        selectedId: 0,
        bottomSelectedId: 0,
        items: [
          {label: '首页首页首页首页首页页首页页首页首页'},
          {label: '推荐'},
          {label: 'Android'},
          {label: '前端前端'},
          {label: '后端'},
          {label: 'iOS'},

        ],
        options: {
          // activeColor: 'red',
          // reBoundExponent: 100,
          // itemEqual: true
          // activeFontSize: '20px',
          // normalColor: 'blue',
          // normalFontSize: '14px',
          // tabHeight: '50px',
        },
        bottomItems: [
          {text: '首页', icon: 'lxr-icon lxr-icon-home'},
          {text: '沸点', icon: 'lxr-icon lxr-icon-icon--'},
          {text: '发现', icon: 'lxr-icon lxr-icon-sousuo'},
          {text: '我', icon: 'lxr-icon lxr-icon-wode'},
        ],
        bottomOptions: {
          activeColor: '#1d98bd',
          fixBottom: true,
          labelKey: 'text'
        }
      }
    },

    methods: {
      handleChange (item, index) {
        console.log(item, index)
      }
    }
  }
</script>

<style>

</style>
