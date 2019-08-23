import LxrTab from './src/index.vue'

const install = function (Vue, config = {}) {
  if (install.installed) return

  Vue.component(LxrTab.name, LxrTab)
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  LxrTab
}
