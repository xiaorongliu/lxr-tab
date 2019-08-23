<template>
    <div class="lxr-tab" :style="{'overflow-x':itemEqual?'hidden':'auto'}">
        <lxr-tabbar v-model="selectedId" v-bind="options">
            <lxr-tab-item v-for="(item, index) in items" :key="index">
             <span v-if="options.fixBottom && item.icon" slot="icon">
                <i :class="item.icon"></i>
             </span>
                <span>{{ item[labelKey] }}</span>
            </lxr-tab-item>
        </lxr-tabbar>
    </div>
</template>

<script>
  import LxrTabbar from './tabbar'
  import LxrTabItem from './tab-item'

  export default {
    name: 'LxrTab',
    components: {
      LxrTabbar,
      LxrTabItem
    },
    props: {
      value: {
        type: Number,
        default: 0
      },
      items: {
        type: Array,
        default () {
          return []
        }
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        selectedId: this.value
      }
    },
    computed: {
      labelKey () {
        return this.options.labelKey || 'label'
      },
      itemEqual () {
        return this.options.itemEqual
      }
    },
    watch: {
      value (value) {
        this.selectedId = value
      },
      selectedId (value) {
        this.$emit('input', value)
        this.$emit('change', this.items[value], value)
      }
    }
  }
</script>

<style>
.lxr-tab{
    background-color: aqua;
}
</style>
