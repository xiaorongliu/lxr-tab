<template>
    <a :class="itemEqual?'lxr-tab-item-equal':'lxr-tab-item'" :style="$parent.value === id ? activeStyle : normalStyle"
       @click="onItemClicked">
        <div class="lxr-tab-item-icon" v-if="$parent.fixBottom">
            <slot name="icon"></slot>
        </div>
        <div :class="itemEqual?'lxr-tab-item-label-equal':'lxr-tab-item-label'">
            <slot></slot>
        </div>
    </a>
</template>

<script>
  export default {
    name: 'LxrTabItem',
    computed: {
      itemEqual () {
        return this.$parent.itemEqual
      },
      activeStyle () {
        return {
          color: this.$parent.activeColor,
          'font-size': this.$parent.activeFontSize
        }
      },
      normalStyle () {
        return {
          color: this.$parent.normalColor,
          'font-size': this.$parent.normalFontSize
        }
      },
    },
    data () {
      return {
        id: (this.$parent.$children.length || 1) - 1
      }
    },
    methods: {
      onItemClicked () {
        this.$parent.$emit('input', this.id)
      }
    }
  }
</script>

<style>
    .lxr-tab-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
    }

    .lxr-tab-item-equal {
        flex: 1;
        text-align: center;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
    }

    .lxr-tab-item-icon {
        margin: 0 auto 5px;
    }

    .lxr-tab-item-label-equal{
        width: 100%;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

</style>
