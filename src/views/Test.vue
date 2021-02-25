<!--  -->
<template>
  <div>
    <el-cascader ref="cascader" :key="key" :props="props" @visible-change="visibleChange" @change="handleChange" />
  </div>
</template>

<script>
let id = 0
let curNode = ''
const cascaderResolve = ''
export default {

  components: {},
  props: {},
  data() {
    return {
      key: '',
      props: {
        checkStrictly: true,
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 })
              .map(item => ({
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 2
              }))
            curNode = node
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes)
          }, 1000)
        }
      }
    }
  },

  methods: {
    visibleChange(flag) {
      if (!flag) {
        id = 0
        this.$refs.cascader.panel.store.nodes = []
        this.key += 1
      }
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
